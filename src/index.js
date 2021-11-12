const express = require("express");

const app = express();

app.get("/movies", (request, response) => {
  return response.json([ "filme 1", "filme 2", "filme 3"]);
});

app.post("/movies", (request, response) => {
  return response.json([ "filme 1", "filme 2", "filme 3", "filme 4"]);
})

app.put("/movies/:id", (request, response) => {
  return response.json([ "filme 1", "filme 2", "filme 3", "filme 5"]);
})

app.patch("/movies/:id", (request, response) => {
  return response.json([ "filme 1", "filme 2", "filme 4", "filme 5"]);
})

app.delete("/movies/:id", (request, response)=> {
  return response.json([ "filme 1", "filme 2", "filme 4"]);
})

app.listen(3333);
