const validator = require('validator')
const MissingParamsError = require('../errors/missing-param-error')

module.exports = class EmailValidator {
  isValid (email) {
    if (!email) {
      throw new MissingParamsError('email')
    }
    return validator.isEmail(email)
  }
}
