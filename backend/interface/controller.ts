import { Model } from "mongoose";
import { Request, Response} from "express"
 
interface controller{
    model:Model<any>;
    insert(req:Request,res:Response):void
    select(req:Request,res:Response):void
    getByName(req:Request,res:Response):void
    updateUser(req:Request,res:Response):void
    DeleteUser(req:Request,res:Response):void
}

export {
    controller
}