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
var import_mongoose3 = require("mongoose");
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
var Item = /* @__PURE__ */ ((Item2) => {
  Item2["FOSSIL_STONE"] = "FOSSIL_STONE";
  Item2["TWISTED_SPOON"] = "TWISTED_SPOON";
  Item2["MYSTIC_WATER"] = "MYSTIC_WATER";
  Item2["MAGNET"] = "MAGNET";
  Item2["BLACK_GLASSES"] = "BLACK_GLASSES";
  Item2["MIRACLE_SEED"] = "MIRACLE_SEED";
  Item2["NEVER_MELT_ICE"] = "NEVER_MELT_ICE";
  Item2["CHARCOAL"] = "CHARCOAL";
  Item2["HEART_SCALE"] = "HEART_SCALE";
  Item2["OLD_AMBER"] = "OLD_AMBER";
  Item2["DAWN_STONE"] = "DAWN_STONE";
  Item2["WATER_STONE"] = "WATER_STONE";
  Item2["THUNDER_STONE"] = "THUNDER_STONE";
  Item2["FIRE_STONE"] = "FIRE_STONE";
  Item2["MOON_STONE"] = "MOON_STONE";
  Item2["DUSK_STONE"] = "DUSK_STONE";
  Item2["LEAF_STONE"] = "LEAF_STONE";
  Item2["ICY_ROCK"] = "ICY_ROCK";
  Item2["CHOICE_SPECS"] = "CHOICE_SPECS";
  Item2["SOUL_DEW"] = "SOUL_DEW";
  Item2["UPGRADE"] = "UPGRADE";
  Item2["REAPER_CLOTH"] = "REAPER_CLOTH";
  Item2["POKEMONOMICON"] = "POKEMONOMICON";
  Item2["WATER_INCENSE"] = "WATER_INCENSE";
  Item2["SHELL_BELL"] = "SHELL_BELL";
  Item2["LUCKY_EGG"] = "LUCKY_EGG";
  Item2["AQUA_EGG"] = "AQUA_EGG";
  Item2["BLUE_ORB"] = "BLUE_ORB";
  Item2["ZOOM_LENS"] = "ZOOM_LENS";
  Item2["BRIGHT_POWDER"] = "BRIGHT_POWDER";
  Item2["DELTA_ORB"] = "DELTA_ORB";
  Item2["MANA_SCARF"] = "MANA_SCARF";
  Item2["SMOKE_BALL"] = "SMOKE_BALL";
  Item2["XRAY_VISION"] = "XRAY_VISION";
  Item2["RAZOR_FANG"] = "RAZOR_FANG";
  Item2["LEFTOVERS"] = "LEFTOVERS";
  Item2["CHOICE_SCARF"] = "CHOICE_SCARF";
  Item2["FIRE_GEM"] = "FIRE_GEM";
  Item2["DEFENSIVE_RIBBON"] = "DEFENSIVE_RIBBON";
  Item2["WONDER_BOX"] = "WONDER_BOX";
  Item2["RUNE_PROTECT"] = "RUNE_PROTECT";
  Item2["WIDE_LENS"] = "WIDE_LENS";
  Item2["RAZOR_CLAW"] = "RAZOR_CLAW";
  Item2["FLUFFY_TAIL"] = "FLUFFY_TAIL";
  Item2["ORAN_BERRY"] = "ORAN_BERRY";
  Item2["SHINY_CHARM"] = "SHINY_CHARM";
  Item2["FOCUS_BAND"] = "FOCUS_BAND";
  Item2["FLAME_ORB"] = "FLAME_ORB";
  Item2["ASSAULT_VEST"] = "ASSAULT_VEST";
  Item2["KINGS_ROCK"] = "KINGS_ROCK";
  Item2["POKE_DOLL"] = "POKE_DOLL";
  Item2["RED_ORB"] = "RED_ORB";
  Item2["MAX_REVIVE"] = "MAX_REVIVE";
  Item2["ROCKY_HELMET"] = "ROCKY_HELMET";
  return Item2;
})(Item || {});
var Pkm = /* @__PURE__ */ ((Pkm2) => {
  Pkm2["DITTO"] = "ditto";
  Pkm2["BULBASAUR"] = "bulbasaur";
  Pkm2["IVYSAUR"] = "ivysaur";
  Pkm2["VENUSAUR"] = "venusaur";
  Pkm2["CHARMANDER"] = "charmander";
  Pkm2["CHARMELEON"] = "charmeleon";
  Pkm2["CHARIZARD"] = "charizard";
  Pkm2["SQUIRTLE"] = "squirtle";
  Pkm2["WARTORTLE"] = "wartortle";
  Pkm2["BLASTOISE"] = "blastoise";
  Pkm2["GEODUDE"] = "geodude";
  Pkm2["GRAVELER"] = "graveler";
  Pkm2["GOLEM"] = "golem";
  Pkm2["AZURILL"] = "azurill";
  Pkm2["MARILL"] = "marill";
  Pkm2["AZUMARILL"] = "azumarill";
  Pkm2["ZUBAT"] = "zubat";
  Pkm2["GOLBAT"] = "golbat";
  Pkm2["CROBAT"] = "crobat";
  Pkm2["MAREEP"] = "mareep";
  Pkm2["FLAFFY"] = "flaffy";
  Pkm2["AMPHAROS"] = "ampharos";
  Pkm2["CLEFFA"] = "cleffa";
  Pkm2["CLEFAIRY"] = "clefairy";
  Pkm2["CLEFABLE"] = "clefable";
  Pkm2["IGGLYBUFF"] = "igglybuff";
  Pkm2["WIGGLYTUFF"] = "wygglytuff";
  Pkm2["JIGGLYPUFF"] = "jigglypuff";
  Pkm2["CATERPIE"] = "caterpie";
  Pkm2["METAPOD"] = "metapod";
  Pkm2["BUTTERFREE"] = "butterfree";
  Pkm2["WEEDLE"] = "weedle";
  Pkm2["KAKUNA"] = "kakuna";
  Pkm2["BEEDRILL"] = "beedrill";
  Pkm2["PIDGEY"] = "pidgey";
  Pkm2["PIDGEOTTO"] = "pidgeotto";
  Pkm2["PIDGEOT"] = "pidgeot";
  Pkm2["HOPPIP"] = "hoppip";
  Pkm2["SKIPLOOM"] = "skiploom";
  Pkm2["JUMPLUFF"] = "jumpluff";
  Pkm2["SEEDOT"] = "seedot";
  Pkm2["NUZLEAF"] = "nuzleaf";
  Pkm2["SHIFTRY"] = "shiftry";
  Pkm2["STARLY"] = "starly";
  Pkm2["STARAVIA"] = "staravia";
  Pkm2["STARAPTOR"] = "staraptor";
  Pkm2["CHIKORITA"] = "chikorita";
  Pkm2["BAYLEEF"] = "bayleef";
  Pkm2["MEGANIUM"] = "meganium";
  Pkm2["CYNDAQUIL"] = "cyndaquil";
  Pkm2["QUILAVA"] = "quilava";
  Pkm2["TYPHLOSION"] = "typlosion";
  Pkm2["TOTODILE"] = "totodile";
  Pkm2["CROCONAW"] = "croconaw";
  Pkm2["FERALIGATR"] = "feraligatr";
  Pkm2["TREECKO"] = "treecko";
  Pkm2["GROVYLE"] = "grovyle";
  Pkm2["SCEPTILE"] = "sceptile";
  Pkm2["TORCHIC"] = "torchic";
  Pkm2["COMBUSKEN"] = "combusken";
  Pkm2["BLAZIKEN"] = "blaziken";
  Pkm2["MUDKIP"] = "mudkip";
  Pkm2["MARSHTOMP"] = "marshtomp";
  Pkm2["SWAMPERT"] = "swampert";
  Pkm2["TURTWIG"] = "turtwig";
  Pkm2["GROTLE"] = "grotle";
  Pkm2["TORTERRA"] = "torterra";
  Pkm2["CHIMCHAR"] = "chimchar";
  Pkm2["MONFERNO"] = "monferno";
  Pkm2["INFERNAPE"] = "infernape";
  Pkm2["PIPLUP"] = "piplup";
  Pkm2["PRINPLUP"] = "prinplup";
  Pkm2["EMPOLEON"] = "empoleon";
  Pkm2["NIDORANF"] = "nidoranF";
  Pkm2["NIDORINA"] = "nidorina";
  Pkm2["NIDOQUEEN"] = "nidoqueen";
  Pkm2["NIDORANM"] = "nidoranM";
  Pkm2["NIDORINO"] = "nidorino";
  Pkm2["NIDOKING"] = "nidoking";
  Pkm2["PICHU"] = "pichu";
  Pkm2["PIKACHU"] = "pikachu";
  Pkm2["RAICHU"] = "raichu";
  Pkm2["MACHOP"] = "machop";
  Pkm2["MACHOKE"] = "machoke";
  Pkm2["MACHAMP"] = "machamp";
  Pkm2["HORSEA"] = "horsea";
  Pkm2["SEADRA"] = "seadra";
  Pkm2["KINGDRA"] = "kingdra";
  Pkm2["TRAPINCH"] = "trapinch";
  Pkm2["VIBRAVA"] = "vibrava";
  Pkm2["FLYGON"] = "flygon";
  Pkm2["SPHEAL"] = "spheal";
  Pkm2["SEALEO"] = "sealeo";
  Pkm2["WALREIN"] = "walrein";
  Pkm2["ARON"] = "aron";
  Pkm2["LAIRON"] = "lairon";
  Pkm2["AGGRON"] = "aggron";
  Pkm2["MAGNEMITE"] = "magnemite";
  Pkm2["MAGNETON"] = "magneton";
  Pkm2["MAGNEZONE"] = "magnezone";
  Pkm2["RHYHORN"] = "rhyhorn";
  Pkm2["RHYDON"] = "rhydon";
  Pkm2["RHYPERIOR"] = "rhyperior";
  Pkm2["TOGEPI"] = "togepi";
  Pkm2["TOGETIC"] = "togetic";
  Pkm2["TOGEKISS"] = "togekiss";
  Pkm2["DUSKULL"] = "duskull";
  Pkm2["DUSCLOPS"] = "dusclops";
  Pkm2["DUSKNOIR"] = "dusknoir";
  Pkm2["LOTAD"] = "lotad";
  Pkm2["LOMBRE"] = "lombre";
  Pkm2["LUDICOLO"] = "ludicolo";
  Pkm2["SHINX"] = "shinx";
  Pkm2["LUXIO"] = "luxio";
  Pkm2["LUXRAY"] = "luxray";
  Pkm2["POLIWAG"] = "poliwag";
  Pkm2["POLIWHIRL"] = "poliwhirl";
  Pkm2["POLITOED"] = "politoed";
  Pkm2["ABRA"] = "abra";
  Pkm2["KADABRA"] = "kadabra";
  Pkm2["ALAKAZAM"] = "alakazam";
  Pkm2["GASTLY"] = "gastly";
  Pkm2["HAUNTER"] = "haunter";
  Pkm2["GENGAR"] = "gengar";
  Pkm2["DRATINI"] = "dratini";
  Pkm2["DRAGONAIR"] = "dragonair";
  Pkm2["DRAGONITE"] = "dragonite";
  Pkm2["LARVITAR"] = "larvitar";
  Pkm2["PUPITAR"] = "pupitar";
  Pkm2["TYRANITAR"] = "tyranitar";
  Pkm2["SLAKOTH"] = "slakoth";
  Pkm2["VIGOROTH"] = "vigoroth";
  Pkm2["SLAKING"] = "slaking";
  Pkm2["RALTS"] = "ralts";
  Pkm2["KIRLIA"] = "kirlia";
  Pkm2["GARDEVOIR"] = "gardevoir";
  Pkm2["BAGON"] = "bagon";
  Pkm2["SHELGON"] = "shelgon";
  Pkm2["SALAMENCE"] = "salamence";
  Pkm2["BELDUM"] = "beldum";
  Pkm2["METANG"] = "metang";
  Pkm2["METAGROSS"] = "metagross";
  Pkm2["GIBLE"] = "gible";
  Pkm2["GABITE"] = "gabite";
  Pkm2["GARCHOMP"] = "garchomp";
  Pkm2["ELEKID"] = "elekid";
  Pkm2["ELECTABUZZ"] = "electabuzz";
  Pkm2["ELECTIVIRE"] = "electivire";
  Pkm2["MAGBY"] = "magby";
  Pkm2["MAGMAR"] = "magmar";
  Pkm2["MAGMORTAR"] = "magmortar";
  Pkm2["MUNCHLAX"] = "munchlax";
  Pkm2["SNORLAX"] = "snorlax";
  Pkm2["GROWLITHE"] = "growlithe";
  Pkm2["ARCANINE"] = "arcanine";
  Pkm2["ONIX"] = "onix";
  Pkm2["STEELIX"] = "steelix";
  Pkm2["MEGA_STEELIX"] = "mega-steelix";
  Pkm2["SCYTHER"] = "scyther";
  Pkm2["SCIZOR"] = "scizor";
  Pkm2["MEGA_SCIZOR"] = "mega-scizor";
  Pkm2["RIOLU"] = "riolu";
  Pkm2["LUCARIO"] = "lucario";
  Pkm2["MEGA_LUCARIO"] = "mega-lucario";
  Pkm2["MAGIKARP"] = "magikarp";
  Pkm2["RATTATA"] = "rattata";
  Pkm2["RATICATE"] = "raticate";
  Pkm2["SPEAROW"] = "spearow";
  Pkm2["FEAROW"] = "fearow";
  Pkm2["GYARADOS"] = "gyarados";
  Pkm2["LUGIA"] = "lugia";
  Pkm2["GIRATINA"] = "giratina";
  Pkm2["ZAPDOS"] = "zapdos";
  Pkm2["MOLTRES"] = "moltres";
  Pkm2["ARTICUNO"] = "articuno";
  Pkm2["DIALGA"] = "dialga";
  Pkm2["PALKIA"] = "palkia";
  Pkm2["SUICUNE"] = "suicune";
  Pkm2["RAIKOU"] = "raikou";
  Pkm2["ENTEI"] = "entei";
  Pkm2["REGICE"] = "regice";
  Pkm2["REGIROCK"] = "regirock";
  Pkm2["REGISTEEL"] = "registeel";
  Pkm2["KYOGRE"] = "kyogre";
  Pkm2["GROUDON"] = "groudon";
  Pkm2["RAYQUAZA"] = "rayquaza";
  Pkm2["REGIGIGAS"] = "regigigas";
  Pkm2["EEVEE"] = "eevee";
  Pkm2["VAPOREON"] = "vaporeon";
  Pkm2["JOLTEON"] = "jolteon";
  Pkm2["FLAREON"] = "flareon";
  Pkm2["ESPEON"] = "espeon";
  Pkm2["UMBREON"] = "umbreon";
  Pkm2["LEAFEON"] = "leafeon";
  Pkm2["SYLVEON"] = "sylveon";
  Pkm2["MEDITITE"] = "meditite";
  Pkm2["MEDICHAM"] = "medicham";
  Pkm2["MEGA_MEDICHAM"] = "mega-medicham";
  Pkm2["NUMEL"] = "numel";
  Pkm2["CAMERUPT"] = "camerupt";
  Pkm2["MEGA_CAMERUPT"] = "mega-camerupt";
  Pkm2["DARKRAI"] = "darkrai";
  Pkm2["LITWICK"] = "litwick";
  Pkm2["LAMPENT"] = "lampent";
  Pkm2["CHANDELURE"] = "chandelure";
  Pkm2["SLOWPOKE"] = "slowpoke";
  Pkm2["SLOWBRO"] = "slowbro";
  Pkm2["SLOWKING"] = "slowking";
  Pkm2["BELLSPROUT"] = "bellsprout";
  Pkm2["WEEPINBELL"] = "weepinbell";
  Pkm2["VICTREEBEL"] = "victreebel";
  Pkm2["CARVANHA"] = "carvanha";
  Pkm2["SWINUB"] = "swinub";
  Pkm2["PILOSWINE"] = "piloswine";
  Pkm2["MAMOSWINE"] = "mamoswine";
  Pkm2["SNORUNT"] = "snorunt";
  Pkm2["GLALIE"] = "glalie";
  Pkm2["FROSLASS"] = "froslass";
  Pkm2["SNOVER"] = "snover";
  Pkm2["ABOMASNOW"] = "abomasnow";
  Pkm2["MEGA_ABOMASNOW"] = "mega-abomasnow";
  Pkm2["VANILLITE"] = "vanillite";
  Pkm2["VANILLISH"] = "vanillish";
  Pkm2["VANILLUXE"] = "vanilluxe";
  Pkm2["GLACEON"] = "glaceon";
  Pkm2["VOLCARONA"] = "volcarona";
  Pkm2["LANDORUS"] = "landorus";
  Pkm2["THUNDURUS"] = "thundurus";
  Pkm2["TORNADUS"] = "tornadus";
  Pkm2["KELDEO"] = "keldeo";
  Pkm2["TERRAKION"] = "terrakion";
  Pkm2["VIRIZION"] = "virizion";
  Pkm2["COBALION"] = "cobalion";
  Pkm2["MANAPHY"] = "manaphy";
  Pkm2["ROTOM"] = "rotom";
  Pkm2["SPIRITOMB"] = "spiritomb";
  Pkm2["ABSOL"] = "absol";
  Pkm2["LAPRAS"] = "lapras";
  Pkm2["LATIAS"] = "latias";
  Pkm2["LATIOS"] = "latios";
  Pkm2["MESPRIT"] = "mesprit";
  Pkm2["AZELF"] = "azelf";
  Pkm2["UXIE"] = "uxie";
  Pkm2["MEWTWO"] = "mewtwo";
  Pkm2["KYUREM"] = "kyurem";
  Pkm2["RESHIRAM"] = "reshiram";
  Pkm2["ZEKROM"] = "zekrom";
  Pkm2["CELEBI"] = "celebi";
  Pkm2["VICTINI"] = "victini";
  Pkm2["JIRACHI"] = "jirachi";
  Pkm2["ARCEUS"] = "arceus";
  Pkm2["DEOXYS"] = "deoxys";
  Pkm2["SHAYMIN"] = "shaymin";
  Pkm2["CRESSELIA"] = "cresselia";
  Pkm2["HEATRAN"] = "heatran";
  Pkm2["HO_OH"] = "ho-Oh";
  Pkm2["AERODACTYL"] = "aerodactyl";
  Pkm2["PRIMAL_KYOGRE"] = "primal-Kyogre";
  Pkm2["PRIMAL_GROUDON"] = "primal-Groudon";
  Pkm2["MEOWTH"] = "meowth";
  Pkm2["PERSIAN"] = "persian";
  Pkm2["DEINO"] = "deino";
  Pkm2["ZWEILOUS"] = "zweilous";
  Pkm2["HYDREIGON"] = "hydreigon";
  Pkm2["SANDILE"] = "sandile";
  Pkm2["KROKOROK"] = "krokorok";
  Pkm2["KROOKODILE"] = "krookodile";
  Pkm2["SOLOSIS"] = "solosis";
  Pkm2["DUOSION"] = "duosion";
  Pkm2["REUNICLUS"] = "reuniclus";
  Pkm2["MEGA_RAYQUAZA"] = "mega-Rayquaza";
  Pkm2["SWABLU"] = "swablu";
  Pkm2["ODDISH"] = "oddish";
  Pkm2["GLOOM"] = "gloom";
  Pkm2["VILEPLUME"] = "vileplume";
  Pkm2["BELLOSSOM"] = "bellossom";
  Pkm2["AMAURA"] = "amaura";
  Pkm2["AURORUS"] = "aurorus";
  Pkm2["ANORITH"] = "anorith";
  Pkm2["ARMALDO"] = "armaldo";
  Pkm2["ARCHEN"] = "archen";
  Pkm2["ARCHEOPS"] = "archeops";
  Pkm2["SHIELDON"] = "shieldon";
  Pkm2["BASTIODON"] = "bastiodon";
  Pkm2["TIRTOUGA"] = "tirtouga";
  Pkm2["CARRACOSTA"] = "carracosta";
  Pkm2["LILEEP"] = "lileep";
  Pkm2["CRADILY"] = "cradily";
  Pkm2["CRANIDOS"] = "cranidos";
  Pkm2["RAMPARDOS"] = "rampardos";
  Pkm2["KABUTO"] = "kabuto";
  Pkm2["KABUTOPS"] = "kabutops";
  Pkm2["OMANYTE"] = "omanyte";
  Pkm2["OMASTAR"] = "omastar";
  Pkm2["TYRUNT"] = "tyrunt";
  Pkm2["TYRANTRUM"] = "tyrantrum";
  Pkm2["BUDEW"] = "budew";
  Pkm2["ROSELIA"] = "roselia";
  Pkm2["ROSERADE"] = "roserade";
  Pkm2["BUNEARY"] = "buneary";
  Pkm2["LOPUNNY"] = "lopunny";
  Pkm2["MEGA_LOPUNNY"] = "mega-lopunny";
  Pkm2["AXEW"] = "axew";
  Pkm2["FRAXURE"] = "fraxure";
  Pkm2["HAXORUS"] = "haxorus";
  Pkm2["VENIPEDE"] = "venipede";
  Pkm2["WHIRLIPEDE"] = "whirlipede";
  Pkm2["SCOLIPEDE"] = "scolipede";
  Pkm2["PORYGON"] = "porygon";
  Pkm2["PORYGON_2"] = "porygon2";
  Pkm2["PORYGON_Z"] = "porygon-z";
  Pkm2["ELECTRIKE"] = "electrike";
  Pkm2["MANECTRIC"] = "manectric";
  Pkm2["MEGA_MANECTRIC"] = "mega-manectric";
  Pkm2["SHUPPET"] = "shuppet";
  Pkm2["BANETTE"] = "banette";
  Pkm2["MEGA_BANETTE"] = "mega-banette";
  Pkm2["HONEDGE"] = "honedge";
  Pkm2["DOUBLADE"] = "doublade";
  Pkm2["AEGISLASH"] = "aegislash";
  Pkm2["CUBONE"] = "cubone";
  Pkm2["MAROWAK"] = "marowak";
  Pkm2["ALOLAN_MAROWAK"] = "alolan-marowak";
  Pkm2["WHISMUR"] = "whismur";
  Pkm2["LOUDRED"] = "loudred";
  Pkm2["EXPLOUD"] = "exploud";
  Pkm2["TYMPOLE"] = "tympole";
  Pkm2["PALPITOAD"] = "palpitoad";
  Pkm2["SEISMITOAD"] = "seismitoad";
  Pkm2["SEWADDLE"] = "sewaddle";
  Pkm2["SWADLOON"] = "swadloon";
  Pkm2["LEAVANNY"] = "leavanny";
  Pkm2["PIKIPEK"] = "pikipek";
  Pkm2["TRUMBEAK"] = "trumbeak";
  Pkm2["TOUCANNON"] = "toucannon";
  Pkm2["FLABEBE"] = "flabebe";
  Pkm2["FLOETTE"] = "floette";
  Pkm2["FLORGES"] = "florges";
  Pkm2["JANGMO_O"] = "jangmo-o";
  Pkm2["HAKAMO_O"] = "hakamo-o";
  Pkm2["KOMMO_O"] = "kommo-o";
  Pkm2["MELOETTA"] = "meloetta";
  Pkm2["ALTARIA"] = "altaria";
  Pkm2["MEGA_ALTARIA"] = "mega-altaria";
  Pkm2["CASTFORM"] = "castform";
  Pkm2["CASTFORM_SUN"] = "castform-sun";
  Pkm2["CASTFORM_RAIN"] = "castform-rain";
  Pkm2["CASTFORM_HAIL"] = "castform-hail";
  Pkm2["CORPHISH"] = "corphish";
  Pkm2["CRAWDAUNT"] = "crawdaunt";
  Pkm2["JOLTIK"] = "joltik";
  Pkm2["GALVANTULA"] = "galvantula";
  Pkm2["GENESECT"] = "genesect";
  Pkm2["RELICANTH"] = "relicanth";
  Pkm2["HATENNA"] = "hatenna";
  Pkm2["HATTREM"] = "hattrem";
  Pkm2["HATTERENE"] = "hatterene";
  Pkm2["FENNEKIN"] = "fennekin";
  Pkm2["BRAIXEN"] = "braixen";
  Pkm2["DELPHOX"] = "delphox";
  Pkm2["MAKUHITA"] = "makuhita";
  Pkm2["HARIYAMA"] = "hariyama";
  Pkm2["REGIELEKI"] = "regieleki";
  Pkm2["REGIDRAGO"] = "regidrago";
  Pkm2["GUZZLORD"] = "guzzlord";
  Pkm2["ETERNATUS"] = "eternatus";
  Pkm2["PONYTA"] = "ponyta";
  Pkm2["RAPIDASH"] = "rapidash";
  Pkm2["NINCADA"] = "nincada";
  Pkm2["NINJASK"] = "ninjask";
  Pkm2["SHEDNINJA"] = "shedninja";
  Pkm2["NOIBAT"] = "noibat";
  Pkm2["NOIVERN"] = "noivern";
  Pkm2["PUMPKABOO"] = "pumpkaboo";
  Pkm2["GOURGEIST"] = "gourgeist";
  Pkm2["CACNEA"] = "cacnea";
  Pkm2["CACTURNE"] = "cacturne";
  Pkm2["TAUROS"] = "tauros";
  Pkm2["DEFAULT"] = "default";
  Pkm2["HAPPINY"] = "happiny";
  Pkm2["CHANSEY"] = "chansey";
  Pkm2["BLISSEY"] = "blissey";
  Pkm2["TAPU_KOKO"] = "tapu-koko";
  Pkm2["TAPU_LELE"] = "tapu-lele";
  Pkm2["STAKATAKA"] = "stakataka";
  Pkm2["BLACEPHALON"] = "blacephalon";
  Pkm2["HOUNDOUR"] = "houndour";
  Pkm2["HOUNDOOM"] = "houndoom";
  Pkm2["MEGA_HOUNDOOM"] = "mega-houndoom";
  Pkm2["CLAMPERL"] = "clamperl";
  Pkm2["HUNTAIL"] = "huntail";
  Pkm2["GOREBYSS"] = "gorebyss";
  Pkm2["SMOOCHUM"] = "smoochum";
  Pkm2["JYNX"] = "jynx";
  Pkm2["SALANDIT"] = "salandit";
  Pkm2["SALAZZLE"] = "salazzle";
  Pkm2["VENONAT"] = "venonat";
  Pkm2["VENOMOTH"] = "venomoth";
  Pkm2["VOLTORB"] = "voltorb";
  Pkm2["ELECTRODE"] = "electrode";
  Pkm2["SLUGMA"] = "slugma";
  Pkm2["MAGCARGO"] = "magcargo";
  Pkm2["SNEASEL"] = "sneasel";
  Pkm2["WEAVILE"] = "weavile";
  Pkm2["CROAGUNK"] = "croagunk";
  Pkm2["TOXICROAK"] = "toxicroak";
  Pkm2["CHINCHOU"] = "chinchou";
  Pkm2["LANTURN"] = "lanturn";
  Pkm2["POOCHYENA"] = "poochyena";
  Pkm2["MIGHTYENA"] = "mightyena";
  Pkm2["BRONZOR"] = "bronzor";
  Pkm2["BRONZONG"] = "bronzong";
  Pkm2["DRIFLOON"] = "drifloon";
  Pkm2["DRIFBLIM"] = "drifblim";
  Pkm2["SHROOMISH"] = "shroomish";
  Pkm2["BRELOOM"] = "breloom";
  Pkm2["TENTACOOL"] = "tentacool";
  Pkm2["TENTACRUEL"] = "tentacruel";
  Pkm2["SNUBULL"] = "snubull";
  Pkm2["GRANBULL"] = "granbull";
  Pkm2["SEVIPER"] = "seviper";
  Pkm2["VULPIX"] = "vulpix";
  Pkm2["NINETALES"] = "ninetales";
  Pkm2["ALOLAN_VULPIX"] = "alolan-vulpix";
  Pkm2["ALOLAN_NINETALES"] = "alolan-ninetales";
  Pkm2["BUIZEL"] = "buizel";
  Pkm2["FLOATZEL"] = "floatzel";
  Pkm2["MAWILE"] = "mawile";
  Pkm2["KECLEON"] = "kecleon";
  Pkm2["CARBINK"] = "carbink";
  Pkm2["DIANCIE"] = "diancie";
  Pkm2["CHATOT"] = "chatot";
  Pkm2["GOOMY"] = "goomy";
  Pkm2["SLIGOO"] = "sligoo";
  Pkm2["GOODRA"] = "goodra";
  Pkm2["MEW"] = "mew";
  Pkm2["BOUNSWEET"] = "bounsweet";
  Pkm2["STEENEE"] = "steenee";
  Pkm2["TSAREENA"] = "tsareena";
  Pkm2["VOLCANION"] = "volcanion";
  Pkm2["APPLIN"] = "applin";
  Pkm2["APPLETUN"] = "appletun";
  Pkm2["OSHAWOTT"] = "oshawott";
  Pkm2["DEWOTT"] = "dewott";
  Pkm2["SAMUROTT"] = "samurott";
  Pkm2["SNOM"] = "snom";
  Pkm2["FROSMOTH"] = "frosmoth";
  return Pkm2;
})(Pkm || {});

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

// models/detailled-statistic.ts
var import_mongoose2 = require("mongoose");
var pokemon = new import_mongoose2.Schema({
  name: {
    type: String,
    enum: Object.values(Pkm)
  },
  avatar: {
    type: String
  },
  items: [
    {
      type: String,
      enum: Item
    }
  ]
});
var statisticSchema = new import_mongoose2.Schema({
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
var detailled_statistic_default = (0, import_mongoose2.model)(
  "DetailledStatisticV2",
  statisticSchema
);

// index.ts
async function main() {
  import_dotenv.default.config();
  try {
    const db = await (0, import_mongoose3.connect)(process.env.MONGO_URI);
    const users = await user_metadata_default.find(
      { elo: { $gt: 900 } },
      ["uid", "elo", "displayName"],
      { sort: { level: -1 } }
    );
    if (users) {
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
              const decay = Math.max(1200, u.elo - 10);
              console.log(
                `user ${u.displayName} (${u.elo}) will decay to ${decay}`
              );
              u.elo = decay;
              await u.save();
            }
          }
        }
      }
    }
    await db.disconnect();
  } catch (error) {
    console.log(error);
  }
}
main();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
