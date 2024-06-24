"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var pokemonAutoChessEloDecay_exports = {};
__export(pokemonAutoChessEloDecay_exports, {
  default: () => main
});
module.exports = __toCommonJS(pokemonAutoChessEloDecay_exports);
var import_dayjs = __toESM(require("dayjs"));
var import_relativeTime = __toESM(require("dayjs/plugin/relativeTime"));
var import_dotenv = __toESM(require("dotenv"));
var import_firebase_admin = __toESM(require("firebase-admin"));
var import_mongoose5 = require("mongoose");

// models/detailled-statistic.ts
var import_mongoose = require("mongoose");
var pokemon = new import_mongoose.Schema({
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  items: [
    {
      type: String
    }
  ]
});
var statisticSchema = new import_mongoose.Schema({
  playerId: {
    type: String
  },
  elo: {
    type: Number
  },
  time: {
    type: Number
  },
  name: {
    type: String
  },
  rank: {
    type: Number
  },
  avatar: {
    type: String
  },
  pokemons: [pokemon]
});
var detailled_statistic_default = (0, import_mongoose.model)(
  "DetailledStatisticV2",
  statisticSchema
);

// models/history.ts
var import_mongoose2 = require("mongoose");
var historyPokemon = new import_mongoose2.Schema({
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  inventory: [
    {
      type: String
    }
  ]
});
var history = new import_mongoose2.Schema(
  {
    id: { type: String },
    name: { type: String },
    startTime: { type: Number },
    endTime: { type: Number },
    players: [
      {
        id: { type: String },
        avatar: { type: String },
        name: { type: String },
        elo: { type: Number },
        rank: { type: Number },
        pokemons: [historyPokemon]
      }
    ]
  },
  {
    toJSON: {
      transform: function(doc, ret) {
        delete ret._id;
        delete ret.__v;
        ret.players.forEach((p) => {
          p.pokemons.forEach((po) => {
            po.inventory.forEach((i) => {
              delete i._id;
            });
            delete po._id;
          });
          delete p._id;
        });
      }
    }
  }
);
var history_default = (0, import_mongoose2.model)("History", history);

// models/title-statistic.ts
var import_mongoose3 = require("mongoose");
var titleSchema = new import_mongoose3.Schema({
  name: {
    type: String
  },
  rarity: {
    type: Number
  }
});
var title_statistic_default = (0, import_mongoose3.model)("TitleStatistic", titleSchema);

// models/user-metadata.ts
var import_mongoose4 = require("mongoose");
var userMetadataSchema = new import_mongoose4.Schema({
  uid: {
    type: String
  },
  displayName: {
    type: String
  },
  langage: {
    type: String,
    default: "eng"
  },
  avatar: {
    type: String,
    default: "0019/Normal"
  },
  wins: {
    type: Number,
    default: 0
  },
  exp: {
    type: Number,
    default: 0
  },
  level: {
    type: Number,
    default: 0
  },
  elo: {
    type: Number,
    default: 1e3
  },
  donor: {
    type: Boolean,
    default: false
  },
  booster: {
    type: Number,
    default: 0
  },
  mapWin: {
    ICE: {
      type: Number,
      default: 0
    },
    FIRE: {
      type: Number,
      default: 0
    },
    GROUND: {
      type: Number,
      default: 0
    },
    NORMAL: {
      type: Number,
      default: 0
    },
    GRASS: {
      type: Number,
      default: 0
    },
    WATER: {
      type: Number,
      default: 0
    }
  },
  map: {
    ICE: {
      type: String,
      default: "ICE0"
    },
    FIRE: {
      type: String,
      default: "FIRE0"
    },
    GROUND: {
      type: String,
      default: "GROUND0"
    },
    NORMAL: {
      type: String,
      default: "NORMAL0"
    },
    GRASS: {
      type: String,
      default: "GRASS0"
    },
    WATER: {
      type: String,
      default: "WATER0"
    }
  },
  title: {
    type: String
  },
  role: {
    type: String
  },
  honors: [
    {
      type: String
    }
  ],
  titles: [
    {
      type: String
    }
  ],
  pokemonCollection: {
    type: Map,
    of: {
      dust: {
        type: Number
      },
      selectedEmotion: {
        type: String
      },
      emotions: [
        {
          type: String
        }
      ],
      shinyEmotions: [
        {
          type: String
        }
      ],
      selectedShiny: {
        type: Boolean
      },
      id: {
        type: String
      }
    }
  }
});
var user_metadata_default = (0, import_mongoose4.model)("UserMetadata", userMetadataSchema);

// index.ts
import_dayjs.default.extend(import_relativeTime.default);
async function main() {
  import_dotenv.default.config();
  import_firebase_admin.default.initializeApp({
    credential: import_firebase_admin.default.credential.cert({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      projectId: process.env.FIREBASE_PROJECT_ID,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
    })
  });
  const db = await (0, import_mongoose5.connect)(process.env.MONGO_URI);
  try {
    await deleteAnonymous();
    await eloDecay();
    await titleStats();
    await deleteOldHistory();
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    console.log("disconnect db");
    await db.disconnect();
  }
}
async function deleteAnonymous() {
  console.log("deleting anonymous accounts...");
  const currentDate = (0, import_dayjs.default)();
  const oneMonthLimit = currentDate.subtract(1, "month");
  const anonymousAccounts = new Array();
  await listAllUsers();
  async function listAllUsers(nextPageToken) {
    const listUsersResult = await import_firebase_admin.default.auth().listUsers(1e3, nextPageToken);
    console.log(nextPageToken);
    listUsersResult.users.forEach((userRecord) => {
      const lastSignInDate = (0, import_dayjs.default)(userRecord.metadata.lastSignInTime);
      if (userRecord.email === void 0 && userRecord.photoURL === void 0 && userRecord.metadata.lastSignInTime && lastSignInDate.isBefore(oneMonthLimit)) {
        anonymousAccounts.push(userRecord);
      }
    });
    if (listUsersResult.pageToken) {
      await listAllUsers(listUsersResult.pageToken);
    }
  }
  console.log(
    "deleting ",
    anonymousAccounts.length,
    " 1 month inactive anonymous accounts"
  );
  while (anonymousAccounts.length > 0) {
    const batchDeletion = new Array();
    for (let i = 0; i < 999; i++) {
      const account = anonymousAccounts.pop();
      account && batchDeletion.push(account.uid);
    }
    const firebaseDeletion = await import_firebase_admin.default.auth().deleteUsers(batchDeletion);
    console.log("firebase deletion result ", firebaseDeletion);
    const pacDeletion = await user_metadata_default.deleteMany({
      uid: { $in: batchDeletion }
    });
    console.log("pac deletion result ", pacDeletion);
  }
}
async function eloDecay() {
  console.log("computing elo decay...");
  const users = await user_metadata_default.find({ elo: { $gt: 1100 } }, [
    "uid",
    "elo",
    "displayName"
  ]);
  if (users && users.length > 0) {
    console.log("Checking activity of ", users.length, " users");
    for (let i = 0; i < users.length; i++) {
      const u = users[i];
      const stats = await detailled_statistic_default.find(
        { playerId: u.uid },
        ["time"],
        {
          limit: 1,
          sort: { time: -1 }
        }
      );
      if (stats && stats.length > 0) {
        const time = stats[0].time;
        if (time) {
          const lastGame = new Date(time);
          const now = new Date(Date.now());
          if (now.getTime() - lastGame.getTime() > 86400 * 1e3 * 10) {
            const decay = Math.max(1100, u.elo - 10);
            console.log(
              `user ${u.displayName} (${u.elo}) will decay to ${decay}`
            );
            u.elo = decay;
            await u.save();
          }
        }
      }
    }
  } else {
    console.log("No users to check");
  }
}
async function titleStats() {
  console.log("count the numbers of users...");
  const count = await user_metadata_default.countDocuments();
  console.log(count, " users found");
  const titleEnum = await (await fetch("https://pokemon-auto-chess.com/title-names")).json();
  for (let i = 0; i < Object.values(titleEnum).length; i++) {
    const title = Object.values(titleEnum)[i];
    const titleCount = await user_metadata_default.countDocuments({
      titles: { $in: title }
    });
    await title_statistic_default.deleteMany({ name: title });
    await title_statistic_default.create({ name: title, rarity: titleCount / count });
  }
}
async function deleteOldHistory() {
  console.log("deleting 4 weeks old games...");
  const deleteResults = await detailled_statistic_default.deleteMany({
    time: { $lt: Date.now() - 86400 * 1e3 * 30 }
  });
  const allGames = await detailled_statistic_default.countDocuments();
  console.log(deleteResults, allGames);
  const historyResults = await history_default.deleteMany({
    startTime: { $lt: Date.now() - 86400 * 1e3 * 30 }
  });
  const histories = await history_default.countDocuments();
  console.log(historyResults, histories);
}
main();
