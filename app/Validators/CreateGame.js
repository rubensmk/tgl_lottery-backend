'use strict'

const Antl = use('Antl')

class CreateGame {
  get validateAll() {
    return true;
  }
  get rules() {
    return {
      type: 'required|string|unique:games',
      description: 'required',
      range: 'required|number',
      price: 'required|number',
      ['max-number']: 'required|number',
      color: 'required|string',
      ['min-cart-value']: 'required|number',
    }
  }

  get messages() {
    return Antl.list('validation')
  }
}

module.exports = CreateGame
