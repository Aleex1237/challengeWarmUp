var express = require("express");
var router = express.Router();

const { posts,postsDetail } = require("../controllers/postsController");

/* GET home page. */
router
.get("/", posts)
.get("/:id", postsDetail)

module.exports = router;
