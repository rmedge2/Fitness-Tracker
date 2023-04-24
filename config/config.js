require('dotenv').config()

module.exports = 
  
  {
  "development": {
    "username": "process.env.fitnesstrackerdb_USERS_CORCODING",
      "password": null,
        "database": "fitnesstrackerdb",
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

