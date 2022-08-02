let express = require('express');
let router = express.Router();

let { users, userEdit, userDelete, userSearch } = require('../controllers/admin/adminUsersController')

router
    .get('/', users)
    .put('/:id', userEdit)
    .delete('/:id', userDelete)
    .get('/search', userSearch)

module.exports = router;