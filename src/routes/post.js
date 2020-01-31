const { Router } = require('express');
const controllers = require('../controllers');

const routerPost = Router();

routerPost.post('/', controllers.createPost);

routerPost.get('/', controllers.getAllPosts);

routerPost.get('/:postId', controllers.getPostById);

routerPost.put('/:postId', controllers.updatePost);

routerPost.delete('/:postId', controllers.deletePost);

module.exports = { routerPost };