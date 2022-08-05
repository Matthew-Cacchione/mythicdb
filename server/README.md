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
    "username": "test@gmail.com"
  }
}
```

### POST /api/users/signIn

Sign the user in given an email and password.

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
      "username": "test@gmail.com"
    }
  }
}
```
