import * as Actions from '../actions'

const initialState = []

const pontos = function (state = initialState, action) {
    switch (action.type) {
        case Actions.SET_PONTOS_DATA:
            {
                return [
                    ...initialState,
                    ...action.payload
                ]
            }
        default:
            {
                return state
            }

    }
}
export default pontos;