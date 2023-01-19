import {connect,set} from "mongoose";
import { Banco } from "../interface/banco.js"
 
class Database implements Banco{
    constructor(){
        set("strictQuery",true)
    }

    async Conect(uri:string):Promise<void>{
        try {
            await connect(uri)
            console.log("banco conectdo com sucesso")
        } catch (error) {
            console.log("não foi possivel conectar ao banco")
        }
    }
}

export{
    Database
}