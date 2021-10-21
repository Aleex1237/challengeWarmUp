const db = require("../../database/models");

module.exports = {
  posts: async (req, res) => {
    let posts = await db.posts.findAll();

    try {
      return res.status(200).json({
        status: `${200} ok`,
        length: posts.length,
        data: posts,
      });
    } catch (error) {
      res.status(500).json({ status: `${500} error!`, error: error });
      console.log(error);
    }
  },
};
