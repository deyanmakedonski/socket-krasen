require('dotenv').config()
module.exports = {
  test: process.env.TEST_VAR,
  port: process.env.PORT
}
