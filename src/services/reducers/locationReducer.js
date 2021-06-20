import * as Actions from '../actions'

const initialState = {}

const location = function (state = initialState, action) {
    switch (action.type) {
        case Actions.SET_LOCATION_DATA:
            {
                return {
                    ...action.payload
                }
            }
        case Actions.CLEAR_LOCATION_DATA:
            {
                return {}
            }
        default:
            {
                return state
            }
    }
}
export default location;