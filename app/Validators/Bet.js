'use strict'

const Antl = use('Antl')

class Bet {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      choosenNumber: 'required',
      user_id: 'required',
      game_id: 'required'
    }
  }

  get messages() {
    return Antl.list('validation')
  }
}

module.exports = Bet
