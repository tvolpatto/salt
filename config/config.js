module.exports = {
  development: {
    username: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "passport_demo",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  test: {
    username: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "passport_demo",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  production: {
    username: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "passport_demo",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  }
}
