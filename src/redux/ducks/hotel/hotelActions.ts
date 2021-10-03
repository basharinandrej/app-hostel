import { Dispatch } from "redux";
import hostelApi from "./hotelApi";
import {actionTypeHotel, hotelResponseDataTypes} from "./hotelTypes";
import {RootState} from "../../rootReducer";

const Actions = {
    setHotels: (hostels: {title: string, id: number}[]) => {
        return {
            type: actionTypeHotel.SET_HOTELS,
            payload: hostels
        }
    },
    setLocationRequest: (locationRequest: string) => {
        return {
            type: actionTypeHotel.SET_LOCATION_REQUEST,
            payload: locationRequest
        }
    },
    setLocationResponse: (locationResponse: string) => {
        return {
            type: actionTypeHotel.SET_LOCATION_RESPONSE,
            payload: locationResponse
        }
    },
    toggleFavoritesHotels: (idHotel: number) => {
        return {
            type: actionTypeHotel.TOGGLE_FAVORITES_HOTEL,
            payload: idHotel
        }
    },
    setDateCheckIn: (dateCheckIn: string) => {
        return {
            type: actionTypeHotel.SET_DATE_CHECK_IN,
            payload: dateCheckIn
        }
    },
    setTotalDays: (totalDays: number) => {
        return {
            type: actionTypeHotel.SET_TOTAL_DAYS,
            payload: totalDays
        }
    },
    setDateCheckOut: () => {
        return {
            type: actionTypeHotel.SET_DATE_CHECK_OUT
        }
    },
    setIsLoadingHotels: (status: boolean) => {
        return {
            type: actionTypeHotel.SET_IS_LOADING_HOTELS,
            payload: status
        }
    },
    setSortHotelRating: () => {
        return {
            type: actionTypeHotel.SET_SORT_HOTEL_RATING
        }
    },
    //AsyncActions
    getHotels: () => async (dispatch: Dispatch, getState: () => RootState) => {
        const {locationRequest, checkIn, checkOut, totalDays} = getState().hotelReducer
        try {
            const dataRequest = {
                locationRequest,
                checkIn,
                checkOut
            }
            dispatch(Actions.setIsLoadingHotels(true))
            const response = await hostelApi.getHotels(dataRequest)
            const data = await response.data as hotelResponseDataTypes[]
            const locationResponse = data[0].location.name

            dispatch(Actions.setHotels((data).map((hotel: any) => {
                return {
                    id: hotel.hotelId,
                    title: hotel.hotelName,
                    rating: hotel.stars,
                    price: hotel.priceFrom,
                    totalDays: totalDays,
                    checkIn: checkIn
                }
            })))
            dispatch(Actions.setLocationResponse(locationResponse))
        } catch (err) {
            console.log('err', err)
        } finally {
            dispatch(Actions.setIsLoadingHotels(false))
        }

    }
}

export default Actions