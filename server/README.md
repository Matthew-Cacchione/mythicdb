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
  "message": "If a message is required it will be here.",
  "data": {
    "affixes": [
      {
        "id": 9,
        "name": "Tyrannical",
        "description": "Bosses have 30% more health. Bosses and their minions inflict up to 15% increased damage.",
        "icon": "achievement_boss_archaedas",
        "wowhead_url": "https://wowhead.com/affix=9"
      }
    ]
  }
}
```

## Character Endpoints

### GET /api/character

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
        }
      ]
    }
  }
}
```

### GET /api/characters

Get a list of searchable characters.

Response will be in this structure:

```json
{
  "status": 200,
  "message": "If a message is required it will be here.",
  "data": [
    {
      "_id": "63b342a2952b56bc4c31567f",
      "name": "Kyrasis",
      "realm": "Area 52",
      "region": "US",
      "faction": "Alliance",
      "thumbnail": "/assets/classicon_deathknight.png"
    }
  ]
}
```
