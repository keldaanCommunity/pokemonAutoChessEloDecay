import { connect, connection } from "mongoose"
import dotenv from "dotenv"
import userMetadata from "./models/user-metadata"
import detailledStatistic from "./models/detailled-statistic"

// This is your task's entrypoint. When your task is executed, this
// function will be called.
export default async function main() {
  dotenv.config()
  const db = await connect(process.env.MONGO_URI!)
  try {
    const users = await userMetadata.find(
      { elo: { $gt: 1100 } },
      ["uid", "elo", "displayName"],
      { sort: { level: -1 } }
    )
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
  } catch (error) {
    throw error
  } finally {
    await db.disconnect()
  }
}

main()
