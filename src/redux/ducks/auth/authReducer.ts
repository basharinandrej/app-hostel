import {actionTypeAuth, initialStateTypeAuth} from "./authTypes";

const initialState: initialStateTypeAuth = {
    isAuth: false
}

const authReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case  actionTypeAuth.SET_IS_AUTH:
            return {
                ...state,
                isAuth: payload
            }
        default:
            return {
                ...state
            }
    }
}

export default authReducer
