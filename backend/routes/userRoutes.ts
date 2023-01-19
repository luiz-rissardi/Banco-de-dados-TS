
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
        return this.Routes
    }
}

export  {
    UserRoutes
}