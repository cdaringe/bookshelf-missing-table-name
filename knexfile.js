module.exports = {
  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:',
    },
    debug: true
  }
}
