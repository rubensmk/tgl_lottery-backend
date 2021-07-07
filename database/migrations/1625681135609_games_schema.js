'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GamesSchema extends Schema {
  up() {
    this.create('games', (table) => {
      table.increments()
      table.string('type', 30).notNullable().unique()
      table.text('description').notNullable()
      table.integer('range').notNullable()
      table.float('price').notNullable()
      table.integer('max-number').notNullable()
      table.string('color', 30).notNullable()
      table.integer('min-cart-value').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('games')
  }
}

module.exports = GamesSchema
