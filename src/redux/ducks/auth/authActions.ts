import {actionTypeAuth} from "./authTypes";

const Actions = {
    setAuth: (status: boolean) => {
        return {
            type: actionTypeAuth.SET_IS_AUTH,
            payload: status
        }
    }
}

export default Actions
