var express = require("express");
var router = express.Router();

const { posts,postsDetail,postCreate } = require("../controllers/postsController");

/* GET home page. */
router
.get("/", posts)
.get("/:id", postsDetail)
.post("/",postCreate)

module.exports = router;
