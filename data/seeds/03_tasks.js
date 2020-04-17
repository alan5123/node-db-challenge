
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
       {task_description: "use computer and have meeting", project_id: 1}
       
      ]);
    });
};
