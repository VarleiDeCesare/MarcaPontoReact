import db from '../ConnectFirebase'
const colletion = "ponto"
export const SET_PONTOS_DATA = 'SET_PONTOS_DATA'
export const getList = () => async (dispatch, getState) => {
    try {
        let dados = await db.collection(colletion).get()
        let lista = []
        dados.forEach(item => {
            let objeto = Object.assign({}, item.data(), { id: item.id })
            lista.push(objeto)
        })
        return dispatch({
            type: SET_PONTOS_DATA,
            payload: lista
        })
    } catch (error) {
        console.log(error)
    }


}
