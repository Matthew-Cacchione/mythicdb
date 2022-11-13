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
  "data": {
    "character": {
      "class": "Death Knight",
      "faction": "Alliance",
      "guild": "Not Idiot",
      "name": "Kyrasis",
      "race": "Dwarf",
      "realm": "Area 52",
      "region": "US",
      "spec": "Blood",
      "thumbnail": "https://render-us.worldofwarcraft.com/character/area-52/43/233016875-avatar.jpg?alt=wow/static/images/2d/avatar/3-0.jpg"
    },
    "mythic_plus": {
      "color": "#fd7c20",
      "score": 3220.8,
      "bestRuns": [
        {
          "dungeon": "Tazavesh: Streets of Wonder",
          "level": 32
        },
        {
          "dungeon": "Mechagon Junkyard",
          "level": 31
        },
        {
          "dungeon": "Grimrail Depot",
          "level": 31
        }
      ]
    }
  }
}
```
