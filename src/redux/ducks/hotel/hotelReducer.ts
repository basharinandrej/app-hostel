import {actionTypeHotel, initialStateTypeHostel} from "./hotelTypes";
import {hotelType} from "../../../Components/ListHotel/ListHotel.types";

const initialState: initialStateTypeHostel = {
    hotels: [],
    favoriteHotels: [],
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
        case actionTypeHotel.TOGGLE_FAVORITES_HOTEL:
            const isFavoriteHotel = state.favoriteHotels.some((hotel: hotelType) => hotel.id === payload)
            if (isFavoriteHotel) {
                return {
                    ...state,
                    favoriteHotels: [...state.favoriteHotels].filter((hotel: hotelType) => hotel.id !== payload) || []
                }
            } else {
                return {
                    ...state,
                    favoriteHotels: [
                        ...state.favoriteHotels,
                        [...state.hotels].find((hotel: hotelType) => hotel.id === payload)
                    ]
                }
            }
        default:
            return state
    }
}

export default hotelReducer