
import { Router } from "express"
import { controller } from "../interface/controller.js"
import { Routers } from "../interface/Routers.js";


class UserRoutes implements Routers {
    private Routes: Router
    private userControl: controller
    constructor(private Controller: controller) {
        this.Routes = Router();
        this.userControl = Controller
    }
    CreateRoutes(): Router {
        this.Routes.route("/service").get((req, res) => {
            try {
                console.log("pegando dados")
                this.userControl.select(req, res)
            } catch (error) {
                console.log("falha ao acessar a rota")
            }
        })
        .post((req, res) => {
                try {
                    console.log("enviando dados...")
                    this.userControl.insert(req, res)
                } catch (error) {
                    console.log("falha ao acessar a rota")
                }
            })

        this.Routes.route("/service/getUsers/:Query").get((req, res) => {
            try {
                this.userControl.getByName(req, res)
            } catch (error) {
                console.log("falha ao acessar a rota")
            }
        })

        this.Routes.route("/service/putUser/:id").put((req, res) => {
            try {
                this.userControl.updateUser(req, res)
            } catch (error) {
                console.log("falha ao acessar a rota")
            }
        })

        this.Routes.route("/service/deleteUser/:id").delete((req,res)=>{
            try {
                this.userControl.DeleteUser(req,res)
            } catch (error) {
                console.log("falha ao acessar a rota")
            }
        })

        return this.Routes
    }
}

export {
    UserRoutes
}