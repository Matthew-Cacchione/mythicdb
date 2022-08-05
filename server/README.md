# Endpoints

Endpoints are grouped into the following categories:

- **user** - relating to users

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

### DELETE /api/users/:id

Delete the user with given id.

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
    "user": {
      "_id": "62ed3ff815cec80011eaca27",
      "username": "username"
    }
  }
}
```
