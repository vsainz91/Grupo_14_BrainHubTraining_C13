const {getUsers, writeUsers} = require('../data');

module.exports = {
    login: (req, res) => {
        res.render('./users/login', {
            titulo: "Login"
        })
    }, 
    register: (req, res) => {
        res.render('./users/register', {
            titulo: "Registro"
        })
    }, 
    processRegister: (req, res) => {
        let lastId = 0;
        getUsers.forEach(user => {
            if(user.id > lastId){
                lastId = user.id
            }
        });

        let newUser = {
            id: lastId + 1,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            avatar: "" 
        }
        getUsers.push(newUser)
        writeUsers(getUsers)
        res.redirect('users/login')
    }
}