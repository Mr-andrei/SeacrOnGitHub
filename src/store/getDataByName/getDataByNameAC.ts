import {RepositoriesType, UserDataType} from "../../services/API/getUserDataAPI";


export const getDataByNameAC = (userData: UserDataType, userRepo: RepositoriesType[]) => ({
    type: "GET_USER_DATA_REPOSITORIES",
    userData,
    userRepo,
} as const)