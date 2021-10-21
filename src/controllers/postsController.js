const db = require("../../database/models");

module.exports = {
  posts: async (req, res) => {
    let posts = await db.Post.findAll();

    try {
      if (posts.length > 0) {
        return res.status(200).json({
          status: `${200} ok`,
          length: posts.length,
          data: posts,
        });
      }
      return res.status(400).json({
        status: `${400}`,
        msg: `No hay posts para mostrar`,
      });
    } catch (error) {
      res.status(500).json({ status: `${500} error!`, error: error });
      console.log(error);
    }
  },
};
