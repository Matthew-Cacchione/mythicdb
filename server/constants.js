// Track the current affix rotation.
const AFFIX_ROTATION = [10, 8, 12, 131];

// Affix data.
const AFFIXES = [
  {
    id: 8,
    name: "Sanguine",
    description:
      "When slain, non-boss enemies leave behind a lingering pool of ichor that heals their allies and damages players.",
    imgSrc:
      "https://render.worldofwarcraft.com/us/icons/56/spell_shadow_bloodboil.jpg",
  },
  {
    id: 10,
    name: "Fortified",
    description:
      "Non-boss enemies have 20% more health and inflict up to 30% increased damage.",
    imgSrc:
      "https://render.worldofwarcraft.com/us/icons/56/ability_toughness.jpg",
  },
  {
    id: 12,
    name: "Grievous",
    description:
      "Injured players suffer increasing damage over time until healed.",
    imgSrc:
      "https://render.worldofwarcraft.com/us/icons/56/ability_backstab.jpg",
  },
  {
    id: 131,
    name: "Shrouded",
    description:
      "Nathrezim infiltrators have disguised themselves among enemies throughout the dungeon. Cartel Ta will reward you handsomely for assisting in their capture.",
    imgSrc:
      "https://render.worldofwarcraft.com/us/icons/56/spell_shadow_nethercloak.jpg",
  },
];

module.exports = { AFFIX_ROTATION, AFFIXES };
