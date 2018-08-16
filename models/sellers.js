module.exports = (sequelize, Sequelize)=> {
    const sellers = sequelize.define('sellers',{
        'idseller':{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'firstnameSeller':Sequelize.STRING,
        'lastnameSeller':Sequelize.STRING,
        'addressSeller':Sequelize.STRING,
        'emailSeller':Sequelize.STRING,
        'phoneSeller':Sequelize.STRING
    }, {
        freezeTableName: true
    })
    return sellers
}