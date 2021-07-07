'use strict'

const Helpers = use('Helpers')
const Mail = use('Mail')

class NewUserMail {

  static get concurrency() {
    return 1
  }

  static get key() {
    return 'NewUserMail-job'
  }

  async handle({ email, username, title, file }) {
    await Mail.send(
      ['emails.new_task'],
      { username, title, hasAtachment: !!file },
      message => {
        message
          .to(email)
          .from('rubenskishimoto@gmail.com', 'Rubens | Luby')
          .subject('Nova tarefa para você')

        if (file) {
          message.attach(Helpers.tmpPath(`uploads/${file.file}`), { filename: file.name })
        }

      })
  }
}

module.exports = NewTaskMail

