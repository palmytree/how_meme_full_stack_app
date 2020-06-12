import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'
import reducer from './reducer'

const rootReducer = combineReducers({
  reducer
})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))
