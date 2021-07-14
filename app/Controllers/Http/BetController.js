'use strict'

const Bet = use('App/Models/Bet')
const Mail = use('Mail')
const Database = use('Database')

class BetController {

  async index({ request }) {
    const { page, user, game } = request.get()
    const bets = await Database.from('bets').where('user_id', user).where('game_id', game).paginate(page, 5)

    return bets
  }

  async store({ request }) {
    const data = request.only(['choosenNumber', 'gameType', 'gameColor', 'gamePrice', 'user_id', 'game_id'])
    const bet = await Bet.create(data)

    return bet
  }


  async show({ params }) {
    const bets = await Database.from('bets').where('user_id', params.user).paginate(params.page, 5);
    return bets
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
