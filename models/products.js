module.exports = (sequelize, Sequelize)=> {
     const products = sequelize.define('products', {
        'idproduct': {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'nameProduct': Sequelize.STRING,
        'priceProduct': Sequelize.INTEGER,
        'stockProduct': Sequelize.INTEGER,
        'brandProduct': Sequelize.STRING,
        'descriptionProduct': Sequelize.TEXT,
        'typeProduct': Sequelize.STRING,
        'imageProduct': Sequelize.STRING,
        'ratingProduct': Sequelize.INTEGER,
        'reviewProduct': Sequelize.TEXT
    }, {
        freezeTableName: true
    })
    return products
}

// const products = sequelize.define('products', {
//     'idproduct': {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     'nameProduct': Sequelize.STRING,
//     'priceProduct': Sequelize.INTEGER,
//     'stockProduct': Sequelize.INTEGER,
//     'brandProduct': Sequelize.STRING,
//     'descriptionProduct': Sequelize.TEXT,
//     'typeProduct': Sequelize.STRING,
//     'imageProduct': Sequelize.STRING,
//     'ratingProduct': Sequelize.INTEGER,
//     'reviewProduct': Sequelize.TEXT
// }, {
//     freezeTableName: true
// })