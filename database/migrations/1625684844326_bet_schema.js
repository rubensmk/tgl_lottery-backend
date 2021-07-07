'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BetSchema extends Schema {
  up() {
    this.create('bets', (table) => {
      table.increments()
      table.string('choosenNumber', 256)
      table.string('gameType', 30)
      table.string('gameColor', 30)
      table.integer('gamePrice')
      table.timestamps()
    })
  }

  down() {
    this.drop('bets')
  }
}

module.exports = BetSchema
