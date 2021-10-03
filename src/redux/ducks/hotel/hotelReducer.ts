import {actionTypeHotel, initialStateTypeHostel} from "./hotelTypes";
import {hotelType} from "../../../Components/ListHotel/ListHotel.types";
import moment from 'moment'

const initialState: initialStateTypeHostel = {
    hotels: [],
    favoriteHotels: [],
    locationRequest: 'Moscow',
    locationResponse: 'Moscow',
    totalDays: 1,
    checkIn: moment().format('YYYY-MM-DD'),
    checkOut: moment().format('YYYY-MM-DD'),
}

const hotelReducer = (state = initialState, { type, payload }: actionTypeHotel) => {

    switch (type) {
        case actionTypeHotel.SET_LOCATION_REQUEST:
            return {
                ...state, locationRequest: payload
            }
        case actionTypeHotel.SET_LOCATION_RESPONSE:
            return {
                ...state, locationResponse: payload
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
        case actionTypeHotel.SET_DATE_CHECK_IN:
            return {
                ...state, checkIn: payload
            }
        case actionTypeHotel.SET_TOTAL_DAYS:
            return {
                ...state, totalDays: payload
            }
        case actionTypeHotel.SET_DATE_CHECK_OUT:
            return {
                ...state, checkOut: moment(state.checkIn).add(state.totalDays, 'days').format('YYYY-MM-DD')
            }
        default:
            return state
    }
}

export default hotelReducer