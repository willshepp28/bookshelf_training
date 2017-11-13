// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/my_life'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }


};
