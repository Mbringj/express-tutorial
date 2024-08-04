import express, { request, response } from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.status(201).send({
    msg: "Hello, World",
  });
});

app.get("/api/users", (request, response) => {
  response.send([
    {
      id: 1,
      username: "mbring",
      displayname: "Mbring Jeremie"
    },
    {
      id: 2,
      username: "Patrick",
      displayname: "Patrick Jeremie"
    },
    {
      id: 3,
      username: "mandi",
      displayname: "Patricia Mandi"
    },
    {
      id: 4,
      username: "Mention",
      displayname: "persone"
    }
  ])
})

app.get("/api/users/:id", (request, response) => {
  console.log(request.params);
})

app.listen(PORT, () => {
  console.log(`Now The application running in PORT ${PORT}`)
});