import fastify, { FastifyInstance } from "fastify";
import userRoute from "./routes/user.route";
const app: FastifyInstance = fastify();

async function main() {
  app.register(userRoute, { prefix: "/user" });
  // -----------------------------Port running
  await app.listen({ port: 3001 }, (err, add) => {
    if (err) {
      app.log.error(err);
    }
    console.log("server running on port" + add);
  });
}
main();
