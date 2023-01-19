import { Model } from "mongoose";
import { User } from "../interface/User.js";
import { controller } from "../interface/controller.js";
import express from "express"


class UserController implements controller{
    model:Model<User>;
    constructor(private Model:Model<User>){
        this.model = Model
    }
    async select(req: express.Request, res: express.Response): Promise<void> {
        try {
            console.log("buscando dados... ")
            const Response = await this.model.find()
            console.log("dados trazidos com sucesso")
            res.json({
                Response,
                message:"sucesso!"
            })
        } catch (error) {
            console.log("não foi possivel realizar a busca!")
        }
    }
    insert(req: express.Request, res: express.Response): void {
        throw new Error("Method not implemented.");
    }
}

export {
    UserController
}