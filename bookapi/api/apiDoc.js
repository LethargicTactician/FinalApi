const apiDoc={
    "openapi": "3.0.0",
    "info": {
      "title": "Book store system",
      "description": "Get good and read (it gives you muscles)",
      "version": "1.0.1"
    },
    "paths": {},
    "components": {
      "schemas": {
        "books": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "title": {
              "type": "string"
            },
            "description": {
              "type": "string"
            }
          }
        },
        "users": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "username": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            }
          }
        }
      }
    }
  }
module.exports = apiDoc