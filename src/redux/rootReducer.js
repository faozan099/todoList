import{ combineReducers } from 'redux'
import { operationsReducer } from './todoapp/reducer/counterReducer'

export const rootReducer = combineReducers({
    operationsReducer,
})