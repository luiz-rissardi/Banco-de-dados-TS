import { Banco } from "./backend/interface/banco.js";
import { UserController } from "./backend/controller/controller.js";
import { UserModel } from "./backend/modules/module.js";
import { UserRoutes } from "./backend/routes/userRoutes.js";
import dotenv from "dotenv"
import cors from "cors";
import express, { json, Express } from "express";
import { Routers } from "./backend/interface/Routers.js";
import { Database } from "./backend/Db/Db.js";

class App {
    private aplication: Express;
    private routes: Routers;
    private Database:Banco;
    constructor(private readonly exp: Express, private readonly route: Routers,private readonly base:Banco) {
        this.aplication = exp
        this.routes = route;
        this.Database = base;
    }
    InitApp() {
        try {
            console.log("iniciando...");
            dotenv.config();
            this.aplication.use(json());
            this.aplication.use(cors());
            this.aplication.use("/api", this.routes.CreateRoutes())
            this.aplication.get("/",(req,res)=>{
                res.json({
                    message:"funcionando"
                })
            })
            this.aplication.listen(process.env.PORT || "3000", () => {
                console.log("servidor rodando")
                console.log("iniciando banco de dados...")
                this.Database.Conect(String(process.env.CONNECT_STRING))
            })
        } catch (error) {
            console.log("não foi possivel iniciar a aplicação")
        }
    }
}
const app = new App(express(), new UserRoutes(new UserController(UserModel)),new Database())
app.InitApp()
//const app = new App()