import {actionTypeHotel, initialStateTypeHostel} from "./hotelTypes";

const initialState: initialStateTypeHostel = {
    hotels: []
}

const hotelReducer = (state = initialState, { type, payload }: actionTypeHotel) => {

    switch (type) {
        case actionTypeHotel.SET_HOTELS:
            return {
                ...state, hotels: payload
            }
        default:
            return state
    }
}

export default hotelReducer