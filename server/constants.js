// Track the current affix rotation.
const AFFIX_ROTATION = [9, 7, 13, 131];

// Affix data, icons are provided courtesy of https://github.com/AcidWeb.
const AFFIXES = [
  {
    id: 7,
    name: "Bolstering",
    description:
      "When any non-boss enemy dies, its death cry empowers nearby allies, temporarily increasing their maximum health by 15% and damage by 20%.",
    imgSrc: "/assets/icon-bolstering.png",
  },
  {
    id: 8,
    name: "Sanguine",
    description:
      "When slain, non-boss enemies leave behind a lingering pool of ichor that heals their allies and damages players.",
    imgSrc: "/assets/icon-sanguine.png",
  },
  {
    id: 9,
    name: "Tyrannical",
    description:
      "Bosses have 30% more health. Bosses and their minions inflict up to 15% increased damage.",
    imgSrc: "/assets/icon-tyrannical.png",
  },
  {
    id: 10,
    name: "Fortified",
    description:
      "Non-boss enemies have 20% more health and inflict up to 30% increased damage.",
    imgSrc: "/assets/icon-fortified.png",
  },
  {
    id: 12,
    name: "Grievous",
    description:
      "Injured players suffer increasing damage over time until healed.",
    imgSrc: "/assets/icon-grievous.png",
  },
  {
    id: 13,
    name: "Explosive",
    description:
      "While in combat, enemies periodically summon Explosive Orbs that will detonate if not destroyed.",
    imgSrc: "/assets/icon-explosive.png",
  },
  {
    id: 131,
    name: "Shrouded",
    description:
      "Nathrezim infiltrators have disguised themselves among enemies throughout the dungeon. Cartel Ta will reward you handsomely for assisting in their capture.",
    imgSrc: "/assets/icon-shrouded.png",
  },
];

module.exports = { AFFIX_ROTATION, AFFIXES };
