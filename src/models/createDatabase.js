import Sequelize from 'sequelize';

const dataBase = new Sequelize({
  dialect: 'sqlite',
  storage: './src/model/data/db.sqlite'
})

export { dataBase }