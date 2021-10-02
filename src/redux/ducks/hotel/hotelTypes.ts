import {hotelType} from "Components/ListHotel/ListHotel.types";

export type initialStateTypeHostel = {
    hotels: hotelType[],
    location: string
}
export const limitRequestHostel = 10
export type actionTypeHotel = {type: string, payload: any}

export const actionTypeHotel = {
    SET_HOTELS: 'HTL:SET_HOTELS',
    SET_LOCATION: 'HTL:SET_LOCATION'
}