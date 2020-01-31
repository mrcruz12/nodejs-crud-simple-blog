const models = require('../database/models')

const createComment = async (req, res) => {
	try {
		const comment = await models.Comment.create(req.body)
		return res.status(201).json({
			comment
		})
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

// const getAllComments = async (req, res) => {
//   try {
//     const Comments = await models.Comment.findAll({
//       include: [
//         {
//           model: models.Comment,
//           as: 'comments'
//         },
//         {
//           model: models.User,
//           as: 'author'
//         }
//       ],
//       order: [
//         ['id', 'ASC'],
//       ]
//     });
//     return res.status(200).json({ Comments });
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// }
//Ok
const getCommentByPost = async (req, res) => {
	console.log('Passou')
	try {
		const { postId } = req.params
		const comments = await models.Comment.findAll({
			where: { postId: postId },
			include: [
				{
					model: models.User,
					as: 'author'
				}
			]
		})
		if (comments) {
			return res.status(200).json({ comments })
		}
		return res.status(404).send('Comment with the specified ID does not exists')
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const updateComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const [ updated ] = await models.Comment.update(req.body, {
      where: { id: commentId }
    });
    if (updated) {
      const updatedComment = await models.Comment.findOne({ where: { id: commentId } });
      return res.status(200).json({ Comment: updatedComment });
    }
    throw new Error('Comment not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const deleted = await models.Comment.destroy({
      where: { id: commentId }
    });
    if (deleted) {
      return res.status(204).send("Comment deleted");
    }
    throw new Error("Comment not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createComment,
  getCommentByPost,
  updateComment,
  deleteComment
	//   getAllComments,
	//   getCommentById,
	//   updateComment,
	//   deleteComment
}
