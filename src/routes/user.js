const { Router } = require('express');
const controllers = require('../controllers');

const routerUser = Router();

routerUser.post('/', controllers.createUser);

routerUser.get('/', controllers.getAllUsers);

routerUser.get('/:userId', controllers.getUserById);

routerUser.put('/:userId', controllers.updateUser);

routerUser.delete('/:userId', controllers.deleteUser);

module.exports = { routerUser };