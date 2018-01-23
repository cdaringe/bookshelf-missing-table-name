
exports.up = async function(knex, Promise) {
  await knex.schema.createTable('topics', table => {
    table.increments()
    table.string('name').notNullable()
    table.string('description').notNullable()
  })
  await knex.batchInsert('topics', [
    { name: 'rust', description: 'safe, fast, and rad. systems programming at its finest' },
    { name: 'javascript', description: 'high level, ubiquitous, easy.' },
    { name: 'python', description: 'cool thing. terrible package management' },
    { name: 'php', description: 'for some reason, we all learned it' },
    { name: 'c#', description: 'where was xplatform support 10 years ago? we would have loved you!' }
  ])
}

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable('topics')
}
