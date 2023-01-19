
import { Schema, model } from "mongoose";
import { User } from "../interface/User.js";

class UserShema {
    createShema():Schema<User> {
        return new Schema<User>({
            nome: {
                type: String,
                required: true,
            },
            sobrenome: {
                type: String,
                required: true,
            },
            idade: {
                type: Number,
                required: true,
            }
        })
    }
}

const UserModel = model("users",new UserShema().createShema())

export {
    UserModel
}