import { combineReducers } from "redux";
import hotelReducer from "redux/ducks/hotel/hotelReducer";
import authReducer from "./ducks/auth/authReducer";

const rootReducer = combineReducers({
    hotelReducer,
    authReducer
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;