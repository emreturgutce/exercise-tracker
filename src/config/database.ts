import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  dialect: 'mysql',
  logging: false,
});

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log(`Connected to MySQL`.cyan.bold);
  } catch (err) {
    console.log(`Could not Connect to MySQL: ${err}`.red.bold);
  }
})();

export default sequelize;
