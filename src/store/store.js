import { compose, createStore, applyMiddleware } from "redux";
import {logger} from 'redux-logger'
import { rootReducer } from "./rootReducer";

// middleware -> un bout de code qui va s'executer avant chaque ou elle definit
const middlewares = [logger]
const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, composedEnhancers)