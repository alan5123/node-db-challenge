const db = require("../data/db-config");





      function addResources(resource) {
        return db("resources").insert(resource);
      }
      
      function getResources() {
        return db("resources");
      }
      
      function addProjects(project) {
        return db("projects").insert(project);
      }
      
      function getProjects() {
        return db("projects");
      }
      
      function addTasks(task) {
        return db("tasks").insert(task);
      }

      function getTasks() {
        return db("tasks as t")
          .join("projects as p", "t.project_id", "p.id")
          .select(
            "t.id",
            "t.task_description",
            "t.notes",
            "t.task_completed",
            "p.project_name",
            "p.project_description"
          )
          .orderBy("p.id");
      }
    
    
      module.exports = {
  
  addResources,
  getResources,
  addProjects,
  getProjects,
  addTasks,
  getTasks,
      };

    