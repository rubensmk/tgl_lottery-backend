'use strict'

const BetHook = exports = module.exports = {}
const Mail = use('Mail')

BetHook.sendNewBetMail = async (betInstance) => {
  if (!betInstance.user_id && !betInstance.dirty.user_id) return

  const { email, username } = await betInstance.user().fetch()
  const { type, price, color } = await betInstance.game().fetch()
  const { choosenNumber } = betInstance

  await Mail.send(['emails.new_bet'], { username, choosenNumber, type, price, color },
    message => {
      message.to(email).from('admin@tgl.com.br', 'Admin|TGL ').subject('Nova aposta realizada.')
    }
  )
}
