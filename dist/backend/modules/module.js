import { Schema, model } from "mongoose";
class UserShema {
    createShema() {
        return new Schema({
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
        });
    }
}
const UserModel = model("users", new UserShema().createShema());
export { UserModel };
