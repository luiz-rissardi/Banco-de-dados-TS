var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class UserController {
    constructor(Model) {
        this.Model = Model;
        this.model = Model;
    }
    DeleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const UserId = req.params.id;
                yield this.model.deleteOne({ _id: UserId });
                res.json({
                    message: "usuario apagado com sucesso!"
                });
            }
            catch (error) {
                console.log("erro ao apagar dados");
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.body;
                const id = req.params.id;
                yield this.model.updateOne({ _id: id }, Object.assign({}, user));
                res.json({
                    message: "Usuario atualizado com sucesso",
                });
            }
            catch (error) {
                console.log("não foi possivel atualizar os dados");
            }
        });
    }
    select(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Response = yield this.model.find();
                res.json({
                    Response,
                    message: "dados pegos com sucesso!"
                });
            }
            catch (error) {
                console.log("não foi possivel realizar a busca!");
            }
        });
    }
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = {
                    nome: req.body.nome,
                    sobrenome: req.body.sobrenome,
                    idade: req.body.idade
                };
                const Response = yield this.Model.create(user);
                res.json({
                    Response,
                    message: "dados salvos com sucesso!"
                });
            }
            catch (error) {
                console.log("não foi possivel salvar no banco");
            }
        });
    }
    getByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let query = req.params.Query;
                query = query.toString();
                const Response = yield this.model.find({ nome: query });
                res.json({
                    message: "dados buscados com sucesso!",
                    Response
                });
            }
            catch (error) {
                console.log("erro ao tenta buscar por nome");
            }
        });
    }
}
export { UserController };
