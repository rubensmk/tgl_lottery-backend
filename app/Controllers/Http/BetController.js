'use strict'

const Bet = use('App/Models/Bet')
const Mail = use('Mail')

class BetController {

  async index({ request }) {
    const { page } = request.get()
    const bets = await Bet.query().with('user').with('game').paginate(page);

    return bets
  }

  async store({ request }) {
    const data = request.only(['choosenNumber', 'user_id', 'game_id'])
    const bet = await Bet.create(data)

    return bet
  }


  async show({ params }) {
    const bet = await Bet.query().where('id', params.id).with('user').with('game').firstOrFail();
    return bet
  }


  async update({ params, request }) {
    const bet = await Bet.findOrFail(params.id);

    const data = await request.only(['choosenNumber'])

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
