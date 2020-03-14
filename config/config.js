/* eslint-disable camelcase */
module.exports = {
  development: {
    username: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "delivery_db",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  test: {
    username: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "delivery_db",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  production: {
    use_env_variable:"JAWSDB_URL",
    dialect: "mysql"
  }
};
