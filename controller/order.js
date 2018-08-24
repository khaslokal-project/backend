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
      status: '0'
    })
    .then(newOrder=> {
      const { items } = req.body;
      items.forEach(item => item.idorder = newOrder.id)

      orderItem.bulkCreate(items)
      res.json(newOrder)
    })
    .catch(error=> {
      res.status(400).send(error)
    })
  },

  updatestatus: (req, res, next)=> {
    const id = Number(req.params.id)
    if(req.body.iduser){
      Order.update({
        status: req.body.status
      }, {
        where: { id: id }
      }).then(()=> {
        res.status(200).send({
          message: `Status updated`
        })
      })
    } else {
      res.status(416).send({
        message: `check your order`
      })
    }
  }
}

module.exports = orderController;