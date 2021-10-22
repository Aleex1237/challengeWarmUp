var express = require("express");
var router = express.Router();

const { posts,postsDetail,postCreate,postUpdate } = require("../controllers/postsController");

/* GET home page. */
router
.get("/", posts)
.get("/:id", postsDetail)
.post("/",postCreate)
.patch("/:id",postUpdate)

module.exports = router;
