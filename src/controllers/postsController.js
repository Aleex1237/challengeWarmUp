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
  postsDetail: async (req, res) => {
    let post = await db.Post.findByPk(req.params.id);

    try {
      if (post) {
        return res.status(200).json({ status: 200, data: post });
      }
      return res.status(400).json({
        status: `${400}`,
        msg: `No existe el post`,
      });
    } catch (error) {
      res.status(500).json({ status: `${500} error!`, error: error });
      console.log(error);
    }
  },
  postCreate: async (req, res) => {
    const { title, content, image, idCategory } = req.body;

    try {
      await db.Post.create({
        title: title,
        content: content,
        image: image,
        idCategory: idCategory,
      });

      return res.status(201).json({ msg: "Creación exitosa." });
    } catch (error) {
      return res.status(500).json({ status: 500, msg: error });
    }
  },
};
