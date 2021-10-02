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

    //AsyncActions
    getHotels: () => async (dispatch: Dispatch, getState: any) => {
        const {location} = getState().hotelReducer
        try {
            const response = await hostelApi.getHotels(location)
            const data = await response.data

            dispatch(Actions.setHotels((data as any).map((hotel: any) => {
                return {
                    id: hotel.hotelId,
                    title: hotel.hotelName,
                    rating: hotel.stars,
                    price: hotel.priceFrom
                }
            })))
        } catch (err) {
            console.log('err', err)
        }

    }
}

export default Actions