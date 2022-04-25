import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {ActionsType} from "../getDataByName/getDataByNameReducer";


const rootReducer = combineReducers({})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppThunk <ReturnTye = void> = ThunkAction<void,AppRootStateType,unknown,ActionsType >

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;