import { FastifyInstance } from "fastify";
import { object } from "zod/lib";
import { CreateUser, Getall, GetUser } from "../controller/user.controller";
interface UserParams {
  id: string;
}
interface IHeaders {
  "h-Custom"?: string;
}

async function useRoute(server: FastifyInstance, prefix: string) {
  // create user
  server.post<{
    Body: any;
    Headers: IHeaders;
    Params: UserParams;
  }>(`${prefix}/create`, async (req: any, res) => {
    try {
      const data = req.body;
      res.send(await CreateUser(data));
    } catch (error) {
      res.send(error);
    }
  });

  // get all or one user
  server.get<{
    Body: any;
    Headers: IHeaders;
    Params: UserParams;
  }>(`${prefix}/find/:id`, async function (req, res) {
    try {
      res.code(200).send(await GetUser(req.params.id));
    } catch (error) {
      res.send(error);
    }
  });
  server.get(`${prefix}/getall`, async function (req, res) {
    try {
      res.send(await Getall());
    } catch (error) {
      res.send(error);
    }
  });
}
export default useRoute;
