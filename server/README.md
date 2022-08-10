# Endpoints

Endpoints are grouped into the following categories:

- **affix** - relating to warcraft affixes
- **character** - relating to warcraft characters
- **realm** - relating to warcraft realms
- **user** - relating to users

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

## User Endpoints

### GET /api/user

Get the user with given authentication token.

Expects a header with the following structure:

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1..."
}
```

Response will be in this structure:

```json
{
  "status": 200,
  "message": "If a message is required it will be here.",
  "data": {
    "_id": "62ed3ff815cec80011eaca27",
    "username": "username"
  }
}
```

### DELETE /api/user

Delete the user with given authentication token.

Expects a header with the following structure:

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1..."
}
```

Response will be in this structure:

```json
{
  "status": 204,
  "message": "If a message is required it will be here.",
  "data": {
    "_id": "62ed7a9decd60c19d0a0c6e4"
  }
}
```

### PATCH /api/user/main-character

Set the user's main character.

Expects a header with the following structure:

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1...",
  "Content-Type": "application/json"
}
```

Expects a body with the following structure:

```json
{
  "name": "name",
  "realm": "realm slug"
}
```

Response will be in this structure:

```json
{
  "status": 200,
  "message": "If a message is required it will be here.",
  "data": {
    "name": "name",
    "realm": "realm slug"
  }
}
```

### PATCH /api/user

Change the user's password with given authentication token.

Expects a header with the following structure:

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1..."
}
```

Expects a body with the following structure:

```json
{
  "oldPassword": "oldPassword",
  "newPassword": "newPassword"
}
```

Response will be in this structure:

```json
{
  "status": 200,
  "message": "If a message is required it will be here.",
  "data": {
    "user": {
      "_id": "62ed8d9226d3f14e42d79347",
      "username": "username"
    }
  }
}
```

### POST /api/users

Create a new user.

Expects a body with the following structure:

```json
{
  "username": "username",
  "password": "password"
}
```

Response will be in this structure:

```json
{
  "status": 201,
  "message": "If a message is required it will be here.",
  "data": {
    "user": {
      "_id": "62ed7a9decd60c19d0a0c6e4",
      "username": "username"
    }
  }
}
```

### POST /api/users/signIn

Sign the user in.

Expects a body with the following structure:

```json
{
  "username": "username",
  "password": "password"
}
```

Response will be in this structure:

```json
{
  "status": 200,
  "message": "If a message is required it will be here.",
  "data": {
    "token": "eyJhbGciOiJIUzI1..."
  }
}
```
