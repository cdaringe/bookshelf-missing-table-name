
exports.up = async function(knex, Promise) {
  await knex.schema.createTable('users', table => {
    table.increments()
    table.string('first').notNullable()
    table.string('last').notNullable()
    table.string('username').notNullable()
    table.unique(['username'])
  })
  await knex.batchInsert('users', [
    { username: 'bilbo', first: 'bilbo', last: 'baggins' },
    { username: 'chad', first: 'chad', last: 'baddy' },
  ])
  await knex.schema.createTable('user_topics', table => {
    table.increments()
    table.integer('user_id').unsigned().notNullable()
    table.foreign('user_id').references('users.id')
    table.integer('topic_id').unsigned().notNullable()
    table.foreign('topic_id').references('topics.id')
    table.unique(['user_id', 'topic_id'])
  })
  await knex.batchInsert('user_topics', [
    { user_id: 1, topic_id: 1 },
    { user_id: 1, topic_id: 2 },
    { user_id: 2, topic_id: 3 },
  ])
  // SELECT first, last, name as topic_name, description FROM users inner join  user_topics on users.id == user_topics.user_id inner join topics on user_topics.topic_id == topics.id
}

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable('users')
  await knex.schema.dropTable('user_topics')
}
