import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import ponto from './reducers/pontoReducer'
import pontos from './reducers/pontosReducer'
import login from './reducers/loginReducer'
const rootReducer = combineReducers({
    ponto, pontos, login
})

//Desenvolvimento
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


//Produção
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store