'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store').validator('User');

Route.post('sessions', 'SessionController.store').validator('Session');

Route.post('passwords', 'ForgotPasswordController.store').validator('ForgotPassword');
Route.put('passwords', 'ForgotPasswordController.update').validator('ResetPassword');

Route.resource('games', 'GameController').apiOnly().validator(new Map([[['games.store'], ['CreateGame']], [['games.update'], ['CreateGame']]]))

Route.group(() => {
  Route.resource('users', 'UserController').apiOnly().validator(new Map([[['users.update'], ['UpdateUser']]]))
  Route.get('bets/:user/:page', 'BetController.show');
  Route.resource('bets', 'BetController').apiOnly().validator(new Map([[['bets.store'], ['Bet']], [['bets.update'], ['Bet']]]))
}).middleware(['auth'])


