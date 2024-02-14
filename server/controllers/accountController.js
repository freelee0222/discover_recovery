const Account = require('../models/account-model')
const createJWT = require('../helper/createJWT')

module.exports = {
    createAccount(req, res) {
        const { email } = req.body
        Account.findOne({ email: email })
            .then(user => {
                if (user) {
                    return res.status(400).json({ success: false, message: 'Email already exists' })
                } else {
                    Account.create(req.body)
                        .then(createdUser => {
                            createJWT(createdUser)
                                .then(token => res.status(200).json({ success: true, token: token, message: 'Account created' }))
                        })
                }
            })
            .catch(err => {
                res.status(500).json({ success: false, message: `Failed creating user, something went wrong. ${err}` });
            })
    },
    editAccount(req, res) {
        const { body } = req
        const id = req.body._id
        Account.findByIdAndUpdate(id, body, { new: true })
            .then(account => res.json(account))
            .catch(err => res.json(err))
    },
    login(req, res) {
        const { email, password } = req.body
        Account.findOne({ email: email })
            .then(account => {
                if (!account) {
                    return res.status(404).json({ success: false, error: "Email not found." })
                }
                account.comparePassword(password, (err, isMatch) => {
                    if (err) {
                        return res.status(400).json({ success: false, error: "Something went wrong." })
                    }
                    if (!isMatch) {
                        return res.status(400).json({ success: false, error: "Incorrect Password!" })
                    }
                    createJWT(account)
                        .then(token => res.status(200).json({ success: true, token: token, message: "success.", account: account }))
                })
            })
            .catch(err => {
                res.status(500).json({ success: false, message: `Something went wrong. ${err}` });
            })
    },
    getMember(req, res) {
        Account.findById(req.user)
            .then(user => {
                if (!user) {
                    return res.status(500).json({ success: false, message: "Something went wrong." });
                }
                res.status(200).json({ success: true, user: user });
            })
            .catch(err => {
                res.status(500).json({ success: false, message: "Something went wrong." })
            })
    },
    getMembers(req, res) {
        Account.find()
            .then(members => res.json(members))
            .catch(err => res.status(500).json(err))
    }
}