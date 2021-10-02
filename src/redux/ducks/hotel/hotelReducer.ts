import {actionTypeHotel, initialStateTypeHostel} from "./hotelTypes";

const initialState: initialStateTypeHostel = {
    hotels: [],
    location: 'Moscow'
}

const hotelReducer = (state = initialState, { type, payload }: actionTypeHotel) => {

    switch (type) {
        case actionTypeHotel.SET_LOCATION:
            return {
                ...state, location: payload
            }
        case actionTypeHotel.SET_HOTELS:
            return {
                ...state, hotels: payload
            }
        default:
            return state
    }
}

export default hotelReducer