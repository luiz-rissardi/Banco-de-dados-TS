
import {Router} from "express"
import { controller } from "../interface/controller.js"
import { Routers } from "../interface/Routers.js";


class UserRoutes implements Routers{
    private Routes:Router
    private userControl:controller
    constructor(private Controller:controller){
        this.Routes = Router();
        this.userControl = Controller
    }
    CreateRoutes():Router{
        this.Routes.route("/service").get((req,res)=>{
            console.log("pegando dados")
            this.userControl.select(req,res)
        })
        .post((req,res)=>{ 
            console.log("enviando dados...") 
            this.userControl.insert(req,res) 
        })

        this.Routes.route("/service/getUsers/:Query").get((req,res)=>{
            try {
                this.Controller.getByName(req,res)
            } catch (error) {
                console.log("falha a buscar por query")
            }
        })

        this.Routes.route("/service/putUser/:id").put((req,res)=>{
            try {
                this.userControl.updateUser(req,res)
            } catch (error) {
                console.log("erro ao acessar a rota de upadate")
            }
        })

        return this.Routes
    }
}

export  {
    UserRoutes
}