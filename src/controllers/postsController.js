const db = require("../../database/models");
const isImageURL = require("image-url-validator").default;

module.exports = {
  posts: async (req, res) => {
    try {
      let posts = await db.Post.findAll({
        include: [{ association: "category" }],
        attributes: [
          "id",
          ["title", "titulo"],
          ["image", "imagen"],
          ["createdAt", "Fecha de creación"],
        ],
      });

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
    try {
      let post = await db.Post.findByPk(req.params.id, {
        include: [{ association: "category" }],
        attributes: [
          "id",
          ["title", "titulo"],
          ["content", "contenido"],
          ["image", "imagen"],
          ["createdAt", "Fecha de creación"],
        ],
      });

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

    let isImage = await isImageURL(req.body.image);

    try {
      if (isImage) {
        await db.Post.create({
          title: title,
          content: content,
          image: image,
          idCategory: idCategory ? +idCategory : 1,
        });
      } else {
        return res.status(400).json({
          status: 400,
          msg: "Solo se acepta imagenes con formato jpg y png",
        });
      }

      return res.status(201).json({ msg: "Creación exitosa." });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ status: 500, msg: error.message });
    }
  },

  postUpdate: async (req, res) => {
    const { title, content, image, idCategory } = req.body;
    let isImage = await isImageURL(req.body.image);

    try {
      if (isImage) {
        await db.Post.update(
          {
            title: title,
            content: content,
            image: image,
            idCategory: idCategory ? +idCategory : 1,
          },
          { where: { id: req.params.id } }
        );
      }

      return res.status(201).json({ msg: "Actalización exitosa." });
    } catch (error) {
      res.status(500).json({ status: 500, msg: error });
      console.log(error);
    }
  },
  postDelete: async (req, res) => {
    try {
      await db.Post.destroy({ where: { id: req.params.id } });

      return res.status(201).json({ msg: "Post eliminado!." });
    } catch (error) {
      res.status(500).json({ status: 500, msg: error });
      console.log(error);
    }
  },
};
