module.exports = (sequelize, Sequelize)=> {
    const users = sequelize.define('users', {
        'iduser':{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'firstnameUser':Sequelize.STRING,
        'lastnameUser':Sequelize.STRING,
        'emailUser':Sequelize.STRING,
        'addressUser':Sequelize.STRING,
        'phoneUser':Sequelize.STRING,
    }, {
        freezeTableName: true
    })
    return users
}