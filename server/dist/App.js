"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const express = require("express");
const corsOptions = {
    origin: "http://localhost:8080",
    optionsSuccessStatus: 200
};
class App {
    constructor() {
        this.express = express();
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express.Router();
        router.get("/", (req, res) => {
            res.json({
                message: "Hello World! Sup chumbly"
            });
        });
        router.get("/data", (req, res) => {
            return res.json({
                message: "special data from server"
            });
        });
        this.express.use(cors(corsOptions));
        this.express.use("/", router);
    }
}
exports.default = new App().express;
//# sourceMappingURL=App.js.map