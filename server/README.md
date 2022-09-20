# Endpoints

Endpoints are grouped into the following categories:

- **affix** - relating to mythic+ affixes
- **character** - relating to warcraft characters

## Affix Endpoints

### GET /api/affixes

Get the current affixes in rotation.

Expects the following variables as a query:

```js
region = "<region code>";
```

Response will be in this structure:

```json
{
  "status": 200,
  "data": {
    "affixes": [
      {
        "id": 9,
        "name": "Tyrannical",
        "description": "Bosses have 30% more health. Bosses and their minions inflict up to 15% increased damage.",
        "icon": "achievement_boss_archaedas",
        "wowhead_url": "https://wowhead.com/affix=9"
      },
      {
        "id": 123,
        "name": "Spiteful",
        "description": "Fiends rise from the corpses of non-boss enemies and pursue random players.",
        "icon": "spell_holy_prayerofshadowprotection",
        "wowhead_url": "https://wowhead.com/affix=123"
      },
      {
        "id": 4,
        "name": "Necrotic",
        "description": "All enemies' melee attacks apply a stacking blight that inflicts damage over time and reduces healing received.",
        "icon": "spell_deathknight_necroticplague",
        "wowhead_url": "https://wowhead.com/affix=4"
      },
      {
        "id": 131,
        "name": "Shrouded",
        "description": "Nathrezim infiltrators have disguised themselves among enemies throughout the dungeon. Cartel Ta will reward you handsomely for assisting in their capture.",
        "icon": "spell_shadow_nethercloak",
        "wowhead_url": "https://wowhead.com/affix=131"
      }
    ]
  }
}
```

## Character Endpoints

### GET /api/characters

Get the data of the specified character.

Expects the following variables as a query:

```js
name = "<character name>";
realm = "<realm slug>";
region = "<region code>";
```

Response will be in this structure:

```json
{
  "status": 200,
  "message": "If a message is required it will be here.",
  "data": {
    "character": {
      "name": "Kyrasis",
      "race": "Dwarf",
      "class": "Death Knight",
      "spec": "Blood",
      "faction": "Alliance",
      "realm": "Area 52",
      "guild": "Not Idiot"
    },
    "mythic_plus": {
      "score": 3112.6,
      "color": "#fe7e15"
    }
  }
}
```
