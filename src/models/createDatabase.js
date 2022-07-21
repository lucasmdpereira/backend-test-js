import Sequelize from 'sequelize';

const dataBase = new Sequelize({
  dialect: 'sqlite',
  storage: './src/data/db.sqlite'
})

export { dataBase }