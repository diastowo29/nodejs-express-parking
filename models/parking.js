module.exports = (sequelize, type) => {
    return sequelize.define('parking', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        area_id: type.STRING(510),
        status: type.STRING(510)
    })
}