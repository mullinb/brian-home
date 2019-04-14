import * as cors from "cors";
import * as express from "express";

const corsOptions = {
    origin: "http://localhost:8080",
    optionsSuccessStatus: 200
};

class App {
    public express: any;

    constructor() {
        this.express = express();
        this.mountRoutes();
    }

    private mountRoutes(): void {
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

export default new App().express;
