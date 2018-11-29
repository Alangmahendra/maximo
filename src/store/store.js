import {createStore,applyMiddleware,combineReducers,compose} from 'redux'
import orderEvent from '../reducers/orderEvent'
import thunk from 'redux-thunk'
import {reducer as formReducers} from 'redux-form'

const rootReducers = combineReducers({
    orderEvent,
    form:formReducers
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    rootReducers,
    composeEnhancer(applyMiddleware(thunk))
)