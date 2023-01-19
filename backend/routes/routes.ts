import { Router } from "express";
import { Routers } from "../interface/Routers.js";



class RootRoutes implements Routers{
    Routes:Router
    constructor(private readonly routes:Routers){
        this.Routes = routes.CreateRoutes()
    }
    CreateRoutes(): Router {
        return this.Routes
    }
}

export {
    RootRoutes
}