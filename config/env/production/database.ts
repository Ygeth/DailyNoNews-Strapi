module.exports = ({ env }) => {
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        user: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        schema: env('DATABASE_SCHEMA'), // Not mandatory, picks up public by default
      },
      debug: false,
    },
  }
};