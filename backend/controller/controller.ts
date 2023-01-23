import { Model } from "mongoose";
import { User } from "../interface/User.js";
import { controller } from "../interface/controller.js";
import express from "express"



class UserController implements controller{
    model:Model<User>;
    constructor(private Model:Model<User>){
        this.model = Model
    }
    
    async DeleteUser(req: express.Request, res: express.Response):Promise<void> {
        try {
            const UserId = req.params.id;
            await this.model.deleteOne({_id:UserId});
            res.json({
                message:"usuario apagado com sucesso!"
            })
        } catch (error) {
            console.log("erro ao apagar dados")
        }
    }

    async updateUser(req: express.Request, res: express.Response):Promise<void> {
        try {
            const user:User = req.body
            const id = req.params.id
            await this.model.updateOne({_id:id},{...user})
            res.json({
                message:"Usuario atualizado com sucesso",
            })
        } catch (error) {
            console.log("não foi possivel atualizar os dados")
        }
    }

    async select(req: express.Request, res: express.Response): Promise<void> {
        try {
            const Response = await this.model.find()
            res.json({
                Response,
                message:"dados pegos com sucesso!"
            })
        } catch (error) {
            console.log("não foi possivel realizar a busca!")
        }
    }
    async insert(req: express.Request, res: express.Response):Promise<void> { 
        try { 
            const user = { 
                nome:req.body.nome, 
                sobrenome:req.body.sobrenome, 
                idade:req.body.idade 
            } 
            const Response = await this.Model.create(user) 
            res.json({ 
                Response, 
                message:"dados salvos com sucesso!" 
            }) 
        } catch (error) { 
            console.log("não foi possivel salvar no banco") 
        } 
    }
    async getByName(req:express.Request,res:express.Response):Promise<void>{
        try {
            let query = req.params.Query
            query = query.toString()
            const Response = await this.model.find({nome:query})
            res.json({
                message:"dados buscados com sucesso!",
                Response
            })
        } catch (error) {
            console.log("erro ao tenta buscar por nome")
        }
    }

}

export {
    UserController
}