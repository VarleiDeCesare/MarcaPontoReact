import db from "../services/ConnectFirebase"

export const CadastroPonto = (ponto) => {
    return new Promise((resolve, reject) => {
        db.collection("ponto")
            .add(ponto)
            .then(() => {
                resolve()
            })
            .catch((erro) => {
                reject(erro)
            })
    })
}

