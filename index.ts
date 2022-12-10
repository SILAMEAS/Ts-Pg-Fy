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

app.get<{ Querystring: IQuery; Headers: IHeaders }>("/", (req, reply) => {
  const { username, password } = req.query;
  return reply.send({
    code: 200,
    message: "succse",
    body: {
      username,
      password,
    },
  });
});
app.listen({ port: 3000 }, (err, add) => {
  if (err) {
    app.log.error(err);
  }
  console.log("server running on port" + add);
});
