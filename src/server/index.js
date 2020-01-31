const express = require('express');
const { routerUser, routerPost, routerComment } = require('../routes');

const server = express();
server.use(express.json());

server.use('/api/posts', routerPost);
server.use('/api/users', routerUser);
server.use('/api/comments', routerComment);

module.exports = server;
