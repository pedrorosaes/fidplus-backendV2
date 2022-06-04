const { Fidelitys } = require("../models");

const fidelityController = {
  createFidelity: async (req, res) => {
    const { price, description, title, restaurant_id } = req.body;

    try {
      await Fidelitys.create({
        price,
        description,
        title,
        restaurant_id,
      });
    } catch (err) {
      console.error(err);
    }
    res.send();
  },
  listAllFidelitysByRestaurant: async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const listaDeProdutos = await Fidelitys.findAll({
      where: {
        restaurant_id: id,
      },
    });
    res.status(201).json(listaDeProdutos);
  },
  deleteFidelity: async (req, res) => {
    const { id } = req.params;

    try {
      await Fidelitys.destroy({
        where: {
          id,
        },
      });
      res.status(201).json({ message: "Fidelity deleted" });
    } catch (err) {
      res.status(400).json(err);
    }
  },
};

module.exports = { fidelityController };
