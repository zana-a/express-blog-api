import express from "express";
import { NIL as uuid_nil, v4 as uuidv4 } from "uuid";

const app = express();
const port = process.env.PORT || 3000;

let posts = [
  {
    id: uuid_nil,
    title: "Hello, World",
    body: "This is the body.",
  },
  {
    id: uuidv4(),
    title: "Hello, World 2",
    body: "This is the body. 2",
  },
];

app.use(express.json());

app.get("/", (_, res) => {
  return res.send({ msg: "Hello, from express!" });
});

app.get("/blog", (_, res) => {
  return res.send(posts);
});

app.post("/blog", (req, res) => {
  const post = req.body;
  if (post.title && post.body) {
    const result = {
      id: uuidv4(),
      ...post,
    };
    posts.push(result);
    return res.send(result);
  }
  return res.status(400).send({
    msg: "Bad request. Please check that title and body fields are present in request",
  });
});

app.get("/blog/:id", (req, res) => {
  const { id } = req.params;
  const result = posts.filter((obj) => obj.id === id);

  if (result.length) return res.send(...result);
  return res.status(404).send({ msg: `not found blog by id: ${id}` });
});

app.listen(port, () => console.log(`Application running on port ${port}.`));
