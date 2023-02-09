import { compose, createStore, applyMiddleware } from "redux";
import {logger} from 'redux-logger'
import { rootReducer } from "./rootReducer";
import thunk from 'redux-thunk'

// middleware -> un bout de code qui va s'executer avant chaque ou elle definit
const middlewares = [logger, thunk]
const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, composedEnhancers)