import { Banco } from "./backend/interface/banco.js";
import { UserController } from "./backend/controller/controller.js";
import { UserModel } from "./backend/modules/module.js";
import { UserRoutes } from "./backend/routes/userRoutes.js";
import { RootRoutes } from "./backend/routes/routes.js";
import dotenv from "dotenv"
import cors from "cors";
import express, { json } from "express";
import { Routers } from "./backend/interface/Routers.js";
import { Database } from "./backend/Db/Db.js";

class App {
    private aplication = express();
    private ROOTROUTES: Routers;
    private Database: Banco;
    constructor(private rootroutes: Routers, private userContoller: UserController, private banco: Banco) {
        this.ROOTROUTES = rootroutes
        this.Database = banco
        this.InitApp()
    }
    private InitApp() {
        try {
            dotenv.config()
            this.aplication.use(json);
            this.aplication.use(cors);
            this.aplication.use("/api", this.ROOTROUTES.CreateRoutes())
            this.aplication.listen("4040", () => {
                console.log("servidor conectado com sucesso !")
                this.Database.Conect(process.env.CONNECT_STRING || "")

            })
        } catch (error) {
            console.log("erro ao inicializar a aplicação")
        }
    }
}

const controller = new UserController(UserModel);
const routes = new UserRoutes(controller)
const rootroutes = new RootRoutes(routes)
const database = new Database()
const app = new App(rootroutes,controller,database)

//const app = new App()