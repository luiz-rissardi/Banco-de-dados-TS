import { UserController } from "./backend/controller/controller.js";
import { UserModel } from "./backend/modules/module.js";
import { UserRoutes } from "./backend/routes/userRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
import express, { json } from "express";
import { Database } from "./backend/Db/Db.js";
class App {
    constructor(exp, route, base) {
        this.exp = exp;
        this.route = route;
        this.base = base;
        this.aplication = exp;
        this.routes = route;
        this.Database = base;
    }
    InitApp() {
        try {
            console.log("iniciando...");
            dotenv.config();
            this.aplication.use(json());
            this.aplication.use(cors());
            this.aplication.use("/api", this.routes.CreateRoutes());
            this.aplication.listen(process.env.PORT || "3000", () => {
                console.log("servidor rodando");
                console.log("iniciando banco de dados...");
                this.Database.Conect(String(process.env.CONNECT_STRING));
            });
        }
        catch (error) {
            console.log("não foi possivel iniciar a aplicação");
        }
    }
}
const app = new App(express(), new UserRoutes(new UserController(UserModel)), new Database());
app.InitApp();
//const app = new App()
