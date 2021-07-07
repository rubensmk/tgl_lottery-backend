'use strict'

const Bet = use('App/Models/Bet')

class BetController {

  async index({ request }) {
    const { page } = request.get()
    const bets = await Bet.query().paginate(page);

    return bets
  }

  async store({ request }) {
    const data = request.only(['choosenNumber', 'gameType', 'gameColor', 'gamePrice'])
    const bet = await Bet.create(data)

    return bet
  }


  async show({ params }) {
    const bet = await Bet.findOrFail(params.id);
    return bet
  }


  async update({ params, request }) {
    const bet = await Bet.findOrFail(params.id);

    const data = await request.only(['choosenNumber', 'gameType', 'gameColor', 'gamePrice'])

    bet.merge(data)

    await bet.save()

    return bet
  }


  async destroy({ params }) {
    const bet = await Bet.findOrFail(params.id);

    await bet.delete()
  }
}

module.exports = BetController
