//require('dotenv').config()

module.exports = {
  development: {
    url: 'postgres://invoices:invoices@127.0.0.1:5432/dev_db',//process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
  },
  test: {
    url: 'postgres://invoices:invoices@127.0.0.1:5432/test_db',//process.env.TEST_DATABASE_URL,
    dialect: 'postgres',
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
}
