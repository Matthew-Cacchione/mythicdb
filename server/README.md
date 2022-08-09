# Endpoints

Endpoints are grouped into the following categories:

- **character** - relating to warcraft characters
- **user** - relating to users

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

### GET /api/characters/suggestions

Get an array of suggested character names and realms.

Response will be in this structure:

```json
{
  "status": 200,
  "data": [
    {
      "_id": "62f2b205df290eb3669307b7",
      "name": "kyrasis",
      "realm": "area-52",
      "class": "death knight"
    },
    {
      "_id": "62f2b205df290eb3669307b7",
      "name": "yumy",
      "realm": "kiljaeden",
      "class": "priest"
    }
  ]
}
```

## User Endpoints

### GET /api/users/:id

Get the user with given id.

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

### PATCH /api/users/:id

Change the given user's password.

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
