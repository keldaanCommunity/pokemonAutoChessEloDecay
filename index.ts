import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import dotenv from "dotenv"
import admin from "firebase-admin"
import { UserRecord } from "firebase-admin/lib/auth/user-record"
import { connect } from "mongoose"
import detailledStatistic from "./models/detailled-statistic"
import history from "./models/history"
import titleStatistic from "./models/title-statistic"
import userMetadata from "./models/user-metadata"
import { Title } from "./types"

dayjs.extend(relativeTime)

// This is your task's entrypoint. When your task is executed, this
// function will be called.
export default async function main() {
  dotenv.config()

  admin.initializeApp({
    credential: admin.credential.cert({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      projectId: process.env.FIREBASE_PROJECT_ID!,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n")
    })
  })

  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  const db = await connect(process.env.MONGO_URI!)
  try {
    await deleteAnonymous()
    await eloDecay()
    await titleStats()
    await deleteOldHistory()
  } catch (error) {
    console.error(error)
    throw error
  } finally {
    console.log("disconnect db")
    await db.disconnect()
  }
}

async function deleteAnonymous() {
  console.log("deleting anonymous accounts...")
  const currentDate = dayjs() // Get the current date and time
  const oneMonthLimit = currentDate.subtract(1, "month")
  const anonymousAccounts = new Array<UserRecord>()
  await listAllUsers()

  async function listAllUsers(nextPageToken?: string) {
    // List batch of users, 1000 at a time.
    const listUsersResult = await admin.auth().listUsers(1000, nextPageToken)
    console.log(nextPageToken)
    listUsersResult.users.forEach((userRecord) => {
      const lastSignInDate = dayjs(userRecord.metadata.lastSignInTime)
      if (
        userRecord.email === undefined &&
        userRecord.photoURL === undefined &&
        userRecord.metadata.lastSignInTime &&
        lastSignInDate.isBefore(oneMonthLimit)
      ) {
        anonymousAccounts.push(userRecord)
      }
    })
    if (listUsersResult.pageToken) {
      // List next batch of users.
      await listAllUsers(listUsersResult.pageToken)
    }
  }

  console.log(
    "deleting ",
    anonymousAccounts.length,
    " 1 month inactive anonymous accounts"
  )

  while (anonymousAccounts.length > 0) {
    const batchDeletion = new Array<string>()
    for (let i = 0; i < 999; i++) {
      const account = anonymousAccounts.pop()
      account && batchDeletion.push(account.uid)
    }
    const firebaseDeletion = await admin.auth().deleteUsers(batchDeletion)
    console.log("firebase deletion result ", firebaseDeletion)
    const pacDeletion = await userMetadata.deleteMany({
      uid: { $in: batchDeletion }
    })
    console.log("pac deletion result ", pacDeletion)
  }
}

async function eloDecay() {
  console.log("computing elo decay...")
  const users = await userMetadata.find({ elo: { $gt: 1100 } }, [
    "uid",
    "elo",
    "displayName"
  ])
  if (users && users.length > 0) {
    console.log("Checking activity of ", users.length, " users")
    for (let i = 0; i < users.length; i++) {
      const u = users[i]
      const stats = await detailledStatistic.find(
        { playerId: u.uid },
        ["time"],
        {
          limit: 1,
          sort: { time: -1 }
        }
      )
      if (stats && stats.length > 0) {
        const time = stats[0].time
        if (time) {
          const lastGame = new Date(time)
          const now = new Date(Date.now())
          if (now.getTime() - lastGame.getTime() > 86400 * 1000 * 10) {
            const decay = Math.max(1100, u.elo - 10)
            console.log(
              `user ${u.displayName} (${u.elo}) will decay to ${decay}`
            )
            u.elo = decay
            await u.save()
          }
        }
      }
    }
  } else {
    console.log("No users to check")
  }
}

async function titleStats() {
  console.log("count the numbers of users...")
  const count = await userMetadata.countDocuments()
  console.log(count, " users found")
  for (let i = 0; i < Object.values(Title).length; i++) {
    const title = Object.values(Title)[i]
    const titleCount = await userMetadata.countDocuments({
      titles: { $in: title }
    })
    await titleStatistic.deleteMany({ name: title })
    await titleStatistic.create({ name: title, rarity: titleCount / count })
  }
}

async function deleteOldHistory() {
  console.log("deleting 4 weeks old games...")
  const deleteResults = await detailledStatistic.deleteMany({
    time: { $lt: Date.now() - 86400 * 1000 * 30 }
  })
  const allGames = await detailledStatistic.countDocuments()
  console.log(deleteResults, allGames)

  const historyResults = await history.deleteMany({
    startTime: { $lt: Date.now() - 86400 * 1000 * 30 }
  })
  const histories = await history.countDocuments()
  console.log(historyResults, histories)
}

main()
