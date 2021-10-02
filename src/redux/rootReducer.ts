import { combineReducers } from "redux";
import hotelReducer from "redux/ducks/hotel/hotelReducer";

const rootReducer = combineReducers({
    hotelReducer
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;