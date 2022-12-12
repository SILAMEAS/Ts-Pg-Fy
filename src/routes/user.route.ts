import { FastifyInstance } from "fastify";
import { getUser } from "../controller/user.controller";

async function useRoute(app: FastifyInstance) {
  app.get("/", getUser);
}
export default useRoute;
