import db from "../services/ConnectFirebase"

const colletion = "localizacao"
export const get = () => {
    return new Promise((resolve, reject) => {
        db.collection(colletion)
            .get()
            .then((dados) => {
                let lista = []
                dados.forEach(item => {
                    let objeto = Object.assign({}, item.data(), { id: item.id })
                    lista.push(objeto)
                })
                resolve(lista)
            })
            .catch((erro) => {
                reject(erro)
            })
    })
}
