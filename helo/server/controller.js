module.exports = {
    registerUser: (req, res) => {
        const {username, password} = req.body;
        req.app.get('db').register_user([username, password])
        .then( users => res.send(users))
        .catch( err => res.status(500).send(err))
    },

    loginUser: (req, res) => {
        const {username, password} = req.body;
        req.app.get('db').login_user([username, password])
        .then( users => res.status(201)(users))
        .catch( err => {
            console.log('--login user err--', err)
            res.status(500).send(err)
        })   
    }
}
