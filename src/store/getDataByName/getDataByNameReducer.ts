import {RepositoriesType, UserDataType} from "../../services/API/getUserDataAPI";
import {getDataByNameAC} from "./getDataByNameAC";


const initialState = {
    userData: {} as UserDataType,
    userRepo: [] as RepositoriesType[]
}


export const getDataByNameReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {


        default:
            return state
    }
}


type InitialStateType = {
    userData: UserDataType
    userRepo: RepositoriesType[]
}
export type ActionsType = ReturnType<typeof getDataByNameAC>