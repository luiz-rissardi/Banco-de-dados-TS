interface Banco{
    Conect(uri:string):Promise<void>
}

export {
    Banco
}