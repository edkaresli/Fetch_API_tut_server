
module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        uname: {
            type: type.STRING,
            allowNull: false
        }, 
        name: {
            type: type.STRING,
            allowNull: false
        },
        email: {
            type: type.STRING,
            allowNull: false
        },
        web: {
            type: type.STRING,
            allowNull: false
        }
    }, 
    {
        timestamps: false
    })   
}