const { createPost, getAllPosts, getPostById, updatePost, deletePost } = require('./post');

const { createUser, getAllUsers, getUserById, updateUser, deleteUser } = require('./user')
const { createComment, getCommentByPost, updateComment, deleteComment } = require('./comment')

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  createComment,
  getCommentByPost,
  updateComment,
  deleteComment
}