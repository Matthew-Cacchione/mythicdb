# Endpoints

Endpoints are grouped into the following categories:

- **user** - relating to users

## User Endpoints

### GET /api/users/:id

Get the user with given id, password is encrypted.

Response will be in this structure:

```json
{
  "status": 200,
  "message": "If a message is required it will be here.",
  "data": {
    "_id": "62ed3ff815cec80011eaca27",
    "email": "test@gmail.com",
    "password": "$2b$10$boMcZ6YroFSXcBSXZmy6iuqnwxIoLxyfh5tO7LnkEcZrkaGvEJHwq",
    "isVerified": false
  }
}
```
