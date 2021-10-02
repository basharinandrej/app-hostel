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

    //AsyncActions
    getHotels: () => async (dispatch: Dispatch) => {
        try {
            const response = await hostelApi.getHotels()
            const data = await response.data

            //@ts-ignore
            dispatch(Actions.setHotels(data.map((hotel: any) => {
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