import {getUserDataAPI} from "../../services/API/getUserDataAPI";
import {getDataByNameAC} from "./getDataByNameAC";
import {AppThunk} from "../store/store";


export const getDataByNameTC = (name: string):AppThunk => async (dispatch) => {
    try {
        const userData = await getUserDataAPI.getUserData(name)
        const userRepo = await getUserDataAPI.getRepositories(name)
        dispatch(getDataByNameAC(userData.data, userRepo.data))
    } catch {

    }
}