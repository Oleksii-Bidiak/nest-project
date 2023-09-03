export default () => ({
  port: process.env.PORT,
  db_port: process.env.DB_PORT,
  db_database: process.env.POSTGRES_DATABASE,
  db_user: process.env.POSTGRES_USER,
  db_password: process.env.DB_PASSWORD,
  db_host: process.env.DB_HOST,
});