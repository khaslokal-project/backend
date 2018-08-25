// on progress
const { order, orderitem } = require('../models')

const orderController = {

  // get all orderItem
  get:(req, res, next)=> {
    order.findAll()
    .then(order=> {
      res.json(order)
    })
    .catch(error=> {
      res.status(400).send(error)
    })
  },

  add:(req, res)=> {
    return order.create({
      iduser: req.body.iduser,
      idcourier: req.body.idcourier,
      status: '0'
    })
    .then(newOrder=> {
      const { items } = req.body;
      items.forEach(item => item.idorder = newOrder.id)

      orderitem.bulkCreate(items)
      res.json(newOrder)
    })
    .catch(error=> {
      res.status(400).send(error)
    })
  },

  // remove order list
  remove: (req, res, next)=> {
    const id = Number(req.params.id)
    order.destroy({
      where: { id: id }
    })
    .then(
      res.status(200).send({
        message: 'order removed'
      })
    )
    .catch(error=> {
      res.status(500).send({
        message: error
      })
    })
  },

  updatestatus: (req, res, next)=> {
    const id = Number(req.params.id)
    if(req.body.iduser){
      order.update({
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