import { STEALTH_STATUS } from "../consts.js";
import { ARMOR_TYPE } from "../consts.js";

export const ARMOR_DATA = {
  PADDED: {
    name: "Padded",
    type: ARMOR_TYPE.LIGHT_ARMOR,
    price: "5gp",
    armorClass: 11,
    strengthRequired: 0,
    stealthStatus: STEALTH_STATUS.DISADVANTAGE,
    weight: 8,
  },

  LEATHER: {
    name: "Leather",
    type: ARMOR_TYPE.LIGHT_ARMOR,
    price: "10gp",
    armorClass: 11,
    strengthRequired: 0,
    stealthStatus: STEALTH_STATUS.NEUTRAL,
    weight: 10,
  },

  STUDDED_LEATHER: {
    name: "Studded Leather",
    type: ARMOR_TYPE.LIGHT_ARMOR,
    price: "45gp",
    armorClass: 12,
    strengthRequired: 0,
    stealthStatus: STEALTH_STATUS.DISADVANTAGE,
    weight: 13,
  },

  HIDE: {
    name: "Leather",
    type: ARMOR_TYPE.MEDIUM_ARMOR,
    price: "10gp",
    armorClass: 12,
    strengthRequired: 0,
    stealthStatus: STEALTH_STATUS.NEUTRAL,
    weight: 12,
  },

  CHAIN_SHIRT: {
    name: "Chain Shirt",
    type: ARMOR_TYPE.MEDIUM_ARMOR,
    price: "50gp",
    armorClass: 13,
    strengthRequired: 0,
    stealthStatus: STEALTH_STATUS.NEUTRAL,
    weight: 20,
  },

  SCALE_MAIL: {
    name: "Scale Mail",
    type: ARMOR_TYPE.MEDIUM_ARMOR,
    price: "50gp",
    armorClass: 14,
    strengthRequired: 0,
    stealthStatus: STEALTH_STATUS.DISADVANTAGE,
    weight: 45,
  },

  BREASTPLATE: {
    name: "Breastplate",
    type: ARMOR_TYPE.MEDIUM_ARMOR,
    price: "400gp",
    armorClass: 14,
    strengthRequired: 0,
    stealthStatus: STEALTH_STATUS.NEUTRAL,
    weight: 20,
  },

  HALF_PLATE: {
    name: "Half Plate",
    type: ARMOR_TYPE.MEDIUM_ARMOR,
    price: "750gp",
    armorClass: 15,
    strengthRequired: 0,
    stealthStatus: STEALTH_STATUS.DISADVANTAGE,
    weight: 40,
  },

  RING_MAIL: {
    name: "Ring Mail",
    type: ARMOR_TYPE.HEAVY_ARMOR,
    price: "30gp",
    armorClass: 14,
    strengthRequired: 0,
    stealthStatus: STEALTH_STATUS.DISADVANTAGE,
    weight: 40,
  },
  CHAIN_MAIL: {
    name: "Chain Mail",
    type: ARMOR_TYPE.HEAVY_ARMOR,
    price: "75gp",
    armorClass: 16,
    strengthRequired: 13,
    stealthStatus: STEALTH_STATUS.DISADVANTAGE,
    weight: 55,
  },
  SPLINT: {
    name: "Splint",
    type: ARMOR_TYPE.HEAVY_ARMOR,
    price: "200gp",
    armorClass: 17,
    strengthRequired: 15,
    stealthStatus: STEALTH_STATUS.DISADVANTAGE,
    weight: 60,
  },
  PLATE: {
    name: "Plate",
    type: ARMOR_TYPE.HEAVY_ARMOR,
    price: "1500gp",
    armorClass: 18,
    strengthRequired: 15,
    stealthStatus: STEALTH_STATUS.DISADVANTAGE,
    weight: 65,
  },
};
