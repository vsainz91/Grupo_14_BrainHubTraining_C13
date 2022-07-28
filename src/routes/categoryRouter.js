let express = require('express');
let router = express.Router();

let controller = require('../controllers/categoriesController')

/* GET Category */
router.get('/', controller.categories)
router.get('/:id', controller.category)

module.exports = router;