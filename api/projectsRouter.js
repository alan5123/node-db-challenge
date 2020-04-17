
const express = require("express");

const projects = require("./projectsModel");

const router = express.Router();


router.get("/", (req, res) => {
    projects
       .getProjects()
       .then((project) => {
         res.json(project);
       })
       .catch((err) => {
         res.status(500).json({ message: "Failed to get projects", err });
       });
     });



     router.get("/resources", (req, res) => {
        projects.getResources()
          .then((resource) => {
            res.status(200).json(resource);
          })
          .catch((err) => {
            res.status(500).json({ error: err.message });
          });
      });

      router.get("/tasks", (req, res) => {
        projects.getTasks()
          .then((task) => {
            res.status(200).json(task);
          })
          .catch((err) => {
            res.status(500).json({ error: err.message });
          });
      });

     router.post("/", (req, res) => {
        projects.addProjects(req.body)
          .then((project) => {
            res.status(201).json(project);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err.message });
          });
      });

      router.post("/resources", (req, res) => {
        projects.addResources(req.body)
          .then((resource) => {
            res.status(201).json(resource);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err.message });
          });
      });

      router.post("/tasks", (req, res) => {
        projects.addTasks(req.body)
          .then((task) => {
            res.status(201).json(task);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err.message });
          });
      });

    



     module.exports = router;