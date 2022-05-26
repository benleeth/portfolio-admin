module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DB_HOST', '127.0.0.1'),
      port: env.int('DB_PORT', 3306),
      database: env('DB_NAME', ''),
      user: env('DB_USER', ''),
      password: env('DB_PASS', ''),
      ssl: env.bool('DB_SSL', false),
    },
  },
});
