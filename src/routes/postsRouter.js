var express = require('express');
var router = express.Router();

const {posts} = require('../controllers/postsController')

/* GET home page. */
router.get('/', posts);

module.exports = router;
