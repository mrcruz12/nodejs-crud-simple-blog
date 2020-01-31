const { Router } = require('express');
const controllers = require('../controllers');

const routerComment = Router();

routerComment.post('/', controllers.createComment);

routerComment.get('/:postId', controllers.getCommentByPost);

// routerComment.get('/:commentId', controllers.getCommentById);

routerComment.put('/:commentId', controllers.updateComment);

routerComment.delete('/:commentId', controllers.deleteComment);

module.exports = { routerComment };