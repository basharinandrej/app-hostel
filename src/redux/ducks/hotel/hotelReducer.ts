import {actionTypeHotel, initialStateTypeHostel} from "./hotelTypes";
import {hotelType} from "Components/ListHotel/ListHotel.types";
import moment from 'moment'
import _ from 'lodash'

const initialState: initialStateTypeHostel = {
    hotels: [],
    favoriteHotels: [],
    locationRequest: 'Moscow',
    locationResponse: 'Moscow',
    totalDays: 1,
    checkIn: moment().format('YYYY-MM-DD'),
    checkOut: moment().format('YYYY-MM-DD'),
    isLoadingHotels: false,
    sliderImages: [
        'sliderImg/1.png', 'sliderImg/2.png', 'sliderImg/3.png',
        'sliderImg/1.png', 'sliderImg/2.png', 'sliderImg/3.png'
    ],
    statusSortRating: 'none'
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
        case actionTypeHotel.SET_IS_LOADING_HOTELS:
            return {
                ...state, isLoadingHotels: payload
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
        case actionTypeHotel.SET_SORT_HOTEL_RATING:
            if (state.favoriteHotels.length < 2) return {...state}

            if (state.statusSortRating === 'none') {
                const hotelsSortedByAscRating = _.orderBy([...state.favoriteHotels], ['rating'], ['desc'])

                return {
                    ...state,
                    statusSortRating: 'asc',
                    favoriteHotels: hotelsSortedByAscRating
                }
            } else if (state.statusSortRating === 'asc'){
                const hotelsSortedByDescRating = _.orderBy([...state.favoriteHotels], ['rating'], ['asc'])

                return {
                    ...state,
                    statusSortRating: 'desc',
                    favoriteHotels: hotelsSortedByDescRating
                }
            } else {
                return {
                    ...state,
                    statusSortRating: 'none'
                }
            }
        default:
            return state
    }
}

export default hotelReducer