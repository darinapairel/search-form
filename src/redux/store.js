import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import reduxLogger from 'redux-logger'

import rootReducers from './reducer'

const configureStore = (reducers = {}, preloadedState = {}) =>
	createStore(
		combineReducers({
			...rootReducers,
			...reducers,
		}),
		preloadedState,
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk, reduxLogger))
	)
export default configureStore
