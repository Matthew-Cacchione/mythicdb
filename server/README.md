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
        "id": 10,
        "name": "Fortified",
        "description": "Non-boss enemies have 20% more health and inflict up to 30% increased damage.",
        "icon": "ability_toughness",
        "wowhead_url": "https://wowhead.com/affix=10"
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
