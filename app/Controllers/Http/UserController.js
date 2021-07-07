'use strict'

const User = use('App/Models/User');
const Mail = use('Mail')
class UserController {

  async index({ request }) {

    const { page } = request.get()
    const users = await User.query().paginate(page);

    return users
  }

  async show({ params }) {
    const user = await User.findOrFail(params.id);
    return user
  }

  async store({ request }) {

    const data = request.only(['username', 'email', 'password'])
    const user = await User.create(data)

    await Mail.send(['emails.new_user'], { username: user.username, email: user.email },
      message => {
        message.to(user.email).from('admin@tgl.com.br', 'Admin|TGL ').subject('Criação de novo usuário realizado.')
      }
    )

    return user;
  }

  async update({ params, request }) {
    const user = await User.findOrFail(params.id);

    const data = await request.only(['username'])

    user.merge(data)

    await user.save()

    return user
  }

  async destroy({ params }) {
    const user = await User.findOrFail(params.id);

    await user.delete()
  }
}

module.exports = UserController
