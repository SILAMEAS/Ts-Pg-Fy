import fastify, { FastifyInstance } from "fastify";
const app: FastifyInstance = fastify();
interface IQuery {
  username: string;
  password: string;
}
interface IHeaders {
  "x-access-token": string;
}
interface IReply {
  code: number;
  message: string;
  body: any;
}

app.get("/", (req, reply) => {
  return "hello seng seng";
});

app.listen({ port: 3000 }, (err, add) => {
  if (err) {
    app.log.error(err);
  }
  console.log("server running on port" + add);
});
