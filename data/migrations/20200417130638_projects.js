
exports.up = function(knex) {
    return knex.schema
    .createTable("projects", (tbl) => {
        tbl.increments();
        tbl.text("project_name").notNullable();
        tbl.text("project_description")
        tbl.boolean("project_completed").defaultTo(0)
    })
    .createTable("resources", (tbl) => {
        tbl.increments()
        tbl.text("resource_name").unique().notNullable()
        tbl.text("resource_description")
        
    })
    .createTable("projects_resources", (tbl) => {
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("projects.id")
         
        tbl
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("resources.id")
         
      })
    .createTable("tasks", (tbl) => {
        tbl.increments()
        tbl.text("task_description").notNullable()
        tbl.text("notes")
        tbl.boolean("task_completed").defaultTo(0)
 
        tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
    })
 };
 
 exports.down = function(knex) {
   return knex.schema
   .dropTableIfExists("tasks")
   .dropTableIfExists("projects_resources")
   .dropTableIfExists("resources")
   .dropTableIfExists("projects")
 };