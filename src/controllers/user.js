const models = require('../database/models')

const createUser = async (req, res) => {
	try {
		const user = await models.User.create(req.body)
		return res.status(201).json({
			user
		})
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

const getAllUsers = async (req, res) => {
	try {
		const Users = await models.User.findAll()
		return res.status(200).json({ Users })
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const getUserById = async (req, res) => {
	try {
		const { userId } = req.params
		const User = await models.User.findOne({
			where: { id: userId }
		})
		if (User) {
			return res.status(200).json({ User })
		}
		return res.status(404).send('User with the specified ID does not exists')
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const updateUser = async (req, res) => {
	try {
		const { userId } = req.params
		const [updated] = await models.User.update(req.body, {
			where: { id: userId }
		})
		if (updated) {
			const updatedUser = await models.User.findOne({ where: { id: userId } })
			return res.status(200).json({ User: updatedUser })
		}
		throw new Error('User not found')
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const deleteUser = async (req, res) => {
	try {
		const { userId } = req.params
		const deleted = await models.User.destroy({
			where: { id: userId }
		})
		if (deleted) {
			return res.status(204).send('User deleted')
		}
		throw new Error('User not found')
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
	createUser,
	getAllUsers,
	getUserById,
	updateUser,
	deleteUser
}
