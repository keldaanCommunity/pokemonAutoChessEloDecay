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
var import_mongoose2 = require("mongoose");
var import_dotenv = __toESM(require("dotenv"));

// models/user-metadata.ts
var import_mongoose = require("mongoose");

// types/index.ts
var Emotion = /* @__PURE__ */ ((Emotion2) => {
  Emotion2["NORMAL"] = "Normal";
  Emotion2["HAPPY"] = "Happy";
  Emotion2["PAIN"] = "Pain";
  Emotion2["ANGRY"] = "Angry";
  Emotion2["WORRIED"] = "Worried";
  Emotion2["SAD"] = "Sad";
  Emotion2["CRYING"] = "Crying";
  Emotion2["SHOUTING"] = "Shouting";
  Emotion2["TEARY_EYED"] = "Teary-Eyed";
  Emotion2["DETERMINED"] = "Determined";
  Emotion2["JOYOUS"] = "Joyous";
  Emotion2["INSPIRED"] = "Inspired";
  Emotion2["SURPRISED"] = "Surprised";
  Emotion2["DIZZY"] = "Dizzy";
  Emotion2["SPECIAL0"] = "Special0";
  Emotion2["SPECIAL1"] = "Special1";
  Emotion2["SIGH"] = "Sigh";
  Emotion2["STUNNED"] = "Stunned";
  Emotion2["SPECIAL2"] = "Special2";
  Emotion2["SPECIAL3"] = "Special3";
  return Emotion2;
})(Emotion || {});
var Role = /* @__PURE__ */ ((Role2) => {
  Role2["ADMIN"] = "ADMIN";
  Role2["MODERATOR"] = "MODERATOR";
  Role2["BASIC"] = "BASIC";
  Role2["BOT"] = "BOT";
  return Role2;
})(Role || {});
var Title = /* @__PURE__ */ ((Title2) => {
  Title2["NOVICE"] = "NOVICE";
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
  Title2["GAMBLER"] = "GAMBLER";
  Title2["SHINY_SEEKER"] = "SHINY_SEEKER";
  return Title2;
})(Title || {});

// models/user-metadata.ts
var userMetadataSchema = new import_mongoose.Schema({
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
    type: String,
    enum: Role,
    default: "BASIC" /* BASIC */
  },
  honors: [
    {
      type: String
    }
  ],
  titles: [
    {
      type: String,
      enum: Title
    }
  ],
  pokemonCollection: {
    type: Map,
    of: {
      dust: {
        type: Number
      },
      selectedEmotion: {
        type: String,
        enum: Emotion
      },
      emotions: [
        {
          type: String,
          enum: Emotion
        }
      ],
      shinyEmotions: [
        {
          type: String,
          enum: Emotion
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
var user_metadata_default = (0, import_mongoose.model)("UserMetadata", userMetadataSchema);

// index.ts
async function main() {
  import_dotenv.default.config();
  try {
    const db = await (0, import_mongoose2.connect)(process.env.MONGO_URI);
    const users = await user_metadata_default.find(
      { elo: { $gt: 1100 } },
      ["uid", "elo", "displayName"],
      { sort: { level: -1 } }
    );
    if (users) {
      console.log("Checking activity of ", users.length, " users");
    }
    await db.disconnect();
  } catch (error) {
    throw error;
  }
}
main();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
