const db = require("../dbconfig/sequelize");
const couriers = db.couriers;

module.exports = app => {
  //get home
  app.get("/", (req, res) => {
    res.send("khaslokal API");
  });
  //get all couriers
  app.get("/api/couriers", (req, res) => {
    couriers.findAll().then(couriers => {
      res.json(couriers);
    });
  });

  //post data to courier with validation
  const { check, validationResult } = require("express-validator/check");

  app.post(
    "/api/couriers/add",
    [
      check("nameCourier").isLength({
        min: 5
      }),
      check("priceCourier").isLength({
        min: 4
      })
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array()
        });
      }
      console.log(req.body);
      couriers
        .create({
          idcourier: req.body.idcourier,
          nameCourier: req.body.nameCourier,
          priceCourier: req.body.priceCourier
        })
        .then(newCouriers => {
          res.json({
            status: "success",
            message: "new courier added",
            data: newCouriers
          });
        });
    }
  );

  //edit data identified by idcourier
  app.put('/api/couriers/edit', (req,res) => {
      const update = {
          idcourier: req.body.idcourier,
          nameCourier:  req.body.nameCourier,
          priceCourier: req.body.priceCourier 
      }
      couriers.update(update, {
          where: {
              idcourier = req.body.idcourier
          }
      })
      .then(affectedRow => {
          return couriers.findOne({
              idcourier: req.body.idcourier
          }, {
              returning: true,
              where: {}
          })
      })
      .then(DataRes => {
          res.json({
              'status': 'success',
              'message': 'courier updated',
              'data': DataRes
          })
      })
  })

  // delete data identified by idcourier
  app.delete('/api/couriers/delete/:idcourier', (req,res) => {
      couriers.destroy({
          where: {
              idcourier: req.params.idcourier
          }
      })
      .then(affectedRow => {
          if(affectedRow){
              return {
                  'status': 'success',
                  'message': 'courier deleted',
                  'data':null
              }
          }
          return {
              'status':'error',
              'message':'failed',
              'data':null
          }
      })
      .then(deleteData => {
          res.json(deleteData)
      })
  })
};
