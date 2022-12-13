"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controller/user.controller");
async function useRoute(server, prefix) {
    // create user
    server.post(`${prefix}/create`, async (req, res) => {
        try {
            const data = req.body;
            res.send(await (0, user_controller_1.CreateUser)(data));
        }
        catch (error) {
            res.send(error);
        }
    });
    // get all or one user
    server.get(`${prefix}/find/:id`, async function (req, res) {
        try {
            res.code(200).send(await (0, user_controller_1.GetUser)(req.params.id));
        }
        catch (error) {
            res.send(error);
        }
    });
    server.get(`${prefix}/getall`, async function (req, res) {
        try {
            res.send(await (0, user_controller_1.Getall)());
        }
        catch (error) {
            res.send(error);
        }
    });
}
exports.default = useRoute;
//# sourceMappingURL=user.route.js.map