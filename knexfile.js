module.exports = {
  development: {
    client: "pg",

    connection: {
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD
    },

    useNullAsDefault: true,

    pool: {
      min: 2,
      max: 10
    },

    migrations: {
      directory: "./data/migrations"
    },

    seeds: {
      directory: "./data/seeds"
    }
  },

  // staging: {
  //     client: 'postgresql',
  //     connection: {
  //         database: 'my_db',
  //         user: 'username',
  //         password: 'password'
  //     },
  //     pool: {
  //         min: 2,
  //         max: 10
  //     },
  //     migrations: {
  //         tableName: 'knex_migrations'
  //     }
  // },

  testing: {
    client: "sqlite3",

    connection: {
      filename: "./data/test.db3"
    },

    useNullAsDefault: true,

    pool: {
      min: 2,
      max: 10,
      afterCreate: (conn, done) => {
        // enforces foreign key constraints on SQLite, not needed for other DBMS
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },

    migrations: {
      directory: "./data/migrations"
    },

    seeds: {
      directory: "./data/seeds"
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
