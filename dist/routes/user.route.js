"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controller/user.controller");
async function useRoute(app) {
    app.get("/", user_controller_1.getUser);
}
exports.default = useRoute;
//# sourceMappingURL=user.route.js.map