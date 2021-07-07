'use strict'

const Antl = use('Antl')

class UpdateUser {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      username: 'string',
    }
  }

  get messages() {
    return Antl.list('validation')
  }
}

module.exports = UpdateUser
