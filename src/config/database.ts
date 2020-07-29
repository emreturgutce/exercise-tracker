import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  dialect: 'mysql',
  logging:
    process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test'
      ? false
      : console.log,
});

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    if (process.env.NODE_ENV === 'development') {
      console.log(`Connected to MySQL`.cyan.bold);
    }
  } catch (error) {
    throw new Error('Unable to connect to database...');
  }
})();

export default sequelize;
