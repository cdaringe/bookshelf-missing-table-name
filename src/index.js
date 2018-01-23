var knex = require('knex')
var conf = require('../knexfile').test
var bookshelf = require('bookshelf')
var db = knex(conf)
var shelf = bookshelf(knex)

var User = shelf.Model.extend({
  tableName: 'users'
})

void async function go () {
  await db.migrate.latest()
  var usr = await new User({ first: 'a', last: 'b', username: 'username' }).save()
  console.log(usr)
}()
