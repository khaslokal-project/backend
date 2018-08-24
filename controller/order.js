// on progress
const { Order, orderItem } = require('../models')

const orderController = {

  // get all orderItem
  get:(req, res, next)=> {
    Order.findAll()
    .then(order=> {
      res.json(order)
    })
    .catch(error=> {
      res.status(400).send(error)
    })
  },

  add:(req, res)=> {
    return Order.create({
      iduser: req.body.iduser,
      idcourier: req.body.idcourier,
      status: req.body.status
    })
    .then(newOrder=> {



      
      orderItem.bulkCreate([
        {
          idproduct:123
        },{

        }
      ])
      
      orderItem.create({
        idproduct: 1,
        qty: 1,
        idOrder: 1
      })

      res.json({
        status: "sucess",
        message: "new order created",
        data: newOrder
      })
    })
    .catch(error=> {
      res.status(400).send(error)
    })
  },

  orderItem: (req, res) => {
    const idcategory = req.params.iduser;
    Order.findAll({
      where: { idproduct: idproduct }
    }).then(result => {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send({
          message: "No data"
        });
      }
    });
  }
}

module.exports = orderController;