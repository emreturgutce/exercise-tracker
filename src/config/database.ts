import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  dialect: 'mysql',
  logging: false,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log(`Connected to MySQL`.cyan.bold);
  } catch (error) {
    console.log(`Could not Connect to MySQL`.red.bold);
  }
})();

export default sequelize;
