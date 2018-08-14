module.exports = (sequelize, type)=> {
    return sequelize.define('products', {
        'idproduct': {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'nameProduct': type.STRING,
        'priceProduct': type.INTEGER,
        'stockProduct': type.INTEGER,
        'brandProduct': type.STRING,
        'descriptionProduct': type.TEXT,
        'typeProduct': type.STRING,
        'imageProduct': type.STRING,
        'ratingProduct': type.INTEGER,
        'reviewProduct': type.TEXT
    }, {
        freezeTableName: true
    })
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