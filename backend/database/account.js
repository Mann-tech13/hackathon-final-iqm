const express = require('express')
const mongoose = require('mongoose')
const database = express()

mongoose.connect(
	'mongodb+srv://manush1234:manush1234@cluster0.mtzpusl.mongodb.net/?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	() => {
		console.log('DB connected')
	}
)

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
})

const User = new mongoose.model('User', userSchema)

database.post('/register', (req, res) => {
	const { name, email, password } = req.body

	// database.get('/getData', (req, res) => {
	// 	res.json(name)
	// })

	User.findOne({ email: email }, (err, user) => {
		if (user) {
			res.send({ message: 'User already registerd' })
		} else {
			const user = new User({
				name,
				email,
				password,
			})
			user.save((err) => {
				if (err) {
					res.send(err)
				} else {
					res.send({ message: 'Successfully Registered, Please login now.' })
				}
			})
		}
	})
})

database.post('/login', (req, res) => {
	const { name, password } = req.body
	User.findOne({ name: name }, (err, user) => {
		if (user) {
			if (password === user.password) {
				database.get('/getData', (req, res) => {
					console.log(name)
					res.json(name)
				})
				res.send({ message: 'Login Successful', user: user })
			} else {
				res.send({ message: "Password didn't match" })
			}
		} else {
			res.send({ message: 'User not registered' })
		}
	})
})

module.exports = database
