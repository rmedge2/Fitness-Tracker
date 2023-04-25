//changed this to a .js file from a JSON file type

require('dotenv').config()

module.exports =

{
  "development": {
    "username": process.env.DB_USER,
    "password": null,
    "database": process.env.DB_NAME,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "process.env.fitnesstrackerdb_USERS_CORCODING",
    "password": null,
    "database": "fitnesstrackerdb_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "process.env.fitnesstrackerdb_USERS_CORCODING",
    "password": null,
    "database": "fitnesstrackerdb_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
