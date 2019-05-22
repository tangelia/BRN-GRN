const User = require('../models/user')

const userController = {
    index: (req, res) => {
        User.find()
            .then((users) => {
                res.json({ users: users })
            })
            .catch((err) => {
                console.log(err)
            })
    },
    create: (req, res) => {
        User.create(req.body)
            .then((user) => {
                res.json({ user: user })
            })
            .catch((err) => {
                console.log(err)
            })
    },
    username: (req, res) => {
        User.findOne({ username: req.params.uname })
            .then((user) => {
                res.json({ user:user})
            })
            .catch((err) => {
                console.log(err)
            })
    },
    show: (req, res) => {
        User.findById(req.params.uid)
            .then((user) => {
                res.json({ user: user })
            })
            .catch((err) => {
                console.log(err)
            })
    },
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.uid, req.body, { new: true })
            .then((user) => {
                res.json({ user: user })
            })
            .catch((err) => {
                console.log(err)
            })
    },
    delete: (req, res) => {
        User.findByIdAndRemove(req.params.uid)
            .then(() => res.json({
                msg: 'User Deleted'
            }))
            .catch((err) => {
                console.log(err)
            })
    }
}


module.exports = userController