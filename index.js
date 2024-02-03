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
var import_dotenv = __toESM(require("dotenv"));
var import_mongoose4 = require("mongoose");

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

// models/title-statistic.ts
var import_mongoose2 = require("mongoose");
var titleSchema = new import_mongoose2.Schema({
  name: {
    type: String
  },
  rarity: {
    type: Number
  }
});
var title_statistic_default = (0, import_mongoose2.model)("TitleStatistic", titleSchema);

// models/user-metadata.ts
var import_mongoose3 = require("mongoose");
var userMetadataSchema = new import_mongoose3.Schema({
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
var user_metadata_default = (0, import_mongoose3.model)("UserMetadata", userMetadataSchema);

// types/index.ts
var Title = /* @__PURE__ */ ((Title2) => {
  Title2["NOVICE"] = "NOVICE";
  Title2["ROOKIE"] = "ROOKIE";
  Title2["AMATEUR"] = "AMATEUR";
  Title2["VETERAN"] = "VETERAN";
  Title2["PRO"] = "PRO";
  Title2["EXPERT"] = "EXPERT";
  Title2["ELITE"] = "ELITE";
  Title2["MASTER"] = "MASTER";
  Title2["GRAND_MASTER"] = "GRAND_MASTER";
  Title2["BIRD_KEEPER"] = "BIRD_KEEPER";
  Title2["BLACK_BELT"] = "BLACK_BELT";
  Title2["BUG_MANIAC"] = "BUG_MANIAC";
  Title2["CUTE_MANIAC"] = "CUTE_MANIAC";
  Title2["DELINQUENT"] = "DELINQUENT";
  Title2["DRAGON_TAMER"] = "DRAGON_TAMER";
  Title2["FIREFIGHTER"] = "FIREFIGHTER";
  Title2["TEAM_ROCKET_GRUNT"] = "TEAM_ROCKET_GRUNT";
  Title2["HIKER"] = "HIKER";
  Title2["LONE_WOLF"] = "LONE_WOLF";
  Title2["KINDLER"] = "KINDLER";
  Title2["GARDENER"] = "GARDENER";
  Title2["MUSEUM_DIRECTOR"] = "MUSEUM_DIRECTOR";
  Title2["ENGINEER"] = "ENGINEER";
  Title2["TELEKINESIST"] = "TELEKINESIST";
  Title2["ELECTRICIAN"] = "ELECTRICIAN";
  Title2["GEOLOGIST"] = "GEOLOGIST";
  Title2["MYTH_TRAINER"] = "MYTH_TRAINER";
  Title2["DIVER"] = "DIVER";
  Title2["POKEMON_RANGER"] = "POKEMON_RANGER";
  Title2["CAMPER"] = "CAMPER";
  Title2["RIVAL"] = "RIVAL";
  Title2["SKIER"] = "SKIER";
  Title2["POKEFAN"] = "POKEFAN";
  Title2["HEX_MANIAC"] = "HEX_MANIAC";
  Title2["MUSICIAN"] = "MUSICIAN";
  Title2["BABYSITTER"] = "BABYSITTER";
  Title2["ALCHEMIST"] = "ALCHEMIST";
  Title2["HARLEQUIN"] = "HARLEQUIN";
  Title2["GLITCH_TRAINER"] = "GLITCH_TRAINER";
  Title2["NURSE"] = "NURSE";
  Title2["GARDIAN"] = "GARDIAN";
  Title2["DUKE"] = "DUKE";
  Title2["DUCHESS"] = "DUCHESS";
  Title2["CHAMPION"] = "CHAMPION";
  Title2["ELITE_FOUR_MEMBER"] = "ELITE_FOUR_MEMBER";
  Title2["GYM_LEADER"] = "GYM_LEADER";
  Title2["GYM_CHALLENGER"] = "GYM_CHALLENGER";
  Title2["GYM_TRAINER"] = "GYM_TRAINER";
  Title2["ACE_TRAINER"] = "ACE_TRAINER";
  Title2["BACKER"] = "BACKER";
  Title2["TYRANT"] = "TYRANT";
  Title2["SURVIVOR"] = "SURVIVOR";
  Title2["GAMBLER"] = "GAMBLER";
  Title2["BOT_BUILDER"] = "BOT_BUILDER";
  Title2["SHINY_SEEKER"] = "SHINY_SEEKER";
  Title2["ARCHEOLOGIST"] = "ARCHEOLOGIST";
  Title2["DENTIST"] = "DENTIST";
  Title2["FISHERMAN"] = "FISHERMAN";
  Title2["CHOSEN_ONE"] = "CHOSEN_ONE";
  Title2["VANQUISHER"] = "VANQUISHER";
  Title2["OUTSIDER"] = "OUTSIDER";
  Title2["GLUTTON"] = "GLUTTON";
  return Title2;
})(Title || {});

// index.ts
async function main() {
  import_dotenv.default.config();
  const db = await (0, import_mongoose4.connect)(process.env.MONGO_URI);
  try {
    const users = await user_metadata_default.find(
      { elo: { $gt: 1100 } },
      ["uid", "elo", "displayName"],
      { sort: { level: -1 } }
    );
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
    console.log("count the numbers of users...");
    const count = await user_metadata_default.countDocuments();
    console.log(count, " users found");
    for (let i = 0; i < Object.values(Title).length; i++) {
      const title = Object.values(Title)[i];
      const titleCount = await user_metadata_default.countDocuments({
        titles: { $in: title }
      });
      await title_statistic_default.deleteMany({ name: title });
      await title_statistic_default.create({ name: title, rarity: titleCount / count });
    }
  } catch (error) {
    throw error;
  } finally {
    console.log("disconnect db");
    await db.disconnect();
  }
}
main();
