const common = require('@root/config/common')

const PORT = process.env.PORT || 8080

module.exports = {
  ...common,
  PORT,
}
