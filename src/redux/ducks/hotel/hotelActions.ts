import { Dispatch } from "redux";
import hostelApi from "./hotelApi";
import {actionTypeHotel} from "./hotelTypes";

const Actions = {
    setHotels: (hostels: {title: string, id: number}[]) => {
        return {
            type: actionTypeHotel.SET_HOTELS,
            payload: hostels
        }
    },
    setLocation: (location: string) => {
        return {
            type: actionTypeHotel.SET_LOCATION,
            payload: location
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
    //AsyncActions
    getHotels: () => async (dispatch: Dispatch, getState: any) => {
        const {location, checkIn, checkOut, totalDays} = getState().hotelReducer
        try {
            const dataRequest = {
                location,
                checkIn,
                checkOut
            }
            const response = await hostelApi.getHotels(dataRequest)
            const data = await response.data

            dispatch(Actions.setHotels((data as any).map((hotel: any) => {
                return {
                    id: hotel.hotelId,
                    title: hotel.hotelName,
                    rating: hotel.stars,
                    price: hotel.priceFrom,
                    totalDays: totalDays,
                    checkIn: checkIn
                }
            })))
        } catch (err) {
            console.log('err', err)
        }

    }
}

export default Actions