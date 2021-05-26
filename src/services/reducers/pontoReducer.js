import * as Actions from '../actions'

const initialState = {}

const ponto = function (state = initialState, action) {
    switch (action.type) {
        case Actions.SET_PONTO_DATA:
            {
                return {
                    ...action.payload
                }
            }
        case Actions.CLEAR_PONTO_DATA:
            {
                return {}
            }
        default:
            {
                return state
            }
    }
}

export default ponto;