# Endpoints

Endpoints are grouped into the following categories:

- **affix** - relating to warcraft affixes
- **character** - relating to warcraft characters
- **realm** - relating to warcraft realms

## Affix Endpoints

### GET /api/affixes

Get the affixes currently in rotation.

Response will be in the following structure:

```json
{
  "status": 200,
  "data": {
    "rotation": [10, 8, 12, 131]
  }
}
```

### GET /api/affixes/:id

Get the data about the specified affix.

Response will be in the following structure:

```json
{
  "status": 200,
  "message": "If a message is required it will be here.",
  "data": {
    "name": "Grievous",
    "description": "Injured players suffer increasing damage over time until healed.",
    "imgSrc": "https://render.worldofwarcraft.com/us/icons/56/ability_backstab.jpg"
  }
}
```

## Character Endpoints

### GET /api/characters

Get the data of the specified character.

Expects the following variables as a query:

```js
name = "character name";
realm = "realm slug";
```

Response will be in this structure:

```json
{
  "status": 200,
  "message": "If a message is required it will be here.",
  "data": {
    "profile": {
      "name": "Kyrasis",
      "realm": "Area 52",
      "faction": "Alliance",
      "race": "Dwarf",
      "class": "Death Knight",
      "spec": "Blood",
      "guild": "Not Idiot"
    },
    "mythic_plus": {
      "rating": 2072.3765,
      "rating_color": {
        "r": 0,
        "g": 112,
        "b": 221,
        "a": 1
      }
    }
  }
}
```

## Realm Endpoints

### GET /api/realms/slug

Get the proper realm slug given realm name.

Expects the following variables as a query. Do not use spaces in the realm name, e.g. Cenarion Circle should be cenarioncircle.

```js
realm = "realm name";
```

Response will be in this structure:

```json
{
  "status": 200,
  "message": "If a message is required it will be here.",
  "data": {
    "slug": "cenarion-circle"
  }
}
```
