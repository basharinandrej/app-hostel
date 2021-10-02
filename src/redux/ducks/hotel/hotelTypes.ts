import {hotelType} from "Components/ListHotel/ListHotel.types";

export type initialStateTypeHostel = {
    hotels: hotelType[],
    favoriteHotels: hotelType[],
    location: string,
    totalDays: number,
    checkIn: string,
    checkOut: string,
}
export const limitRequestHotel = 10
export type actionTypeHotel = {type: string, payload: any}
export type dataRequestHotel = { location: string, checkIn: string, checkOut: string }

export const actionTypeHotel = {
    SET_HOTELS: 'HTL:SET_HOTELS',
    SET_LOCATION: 'HTL:SET_LOCATION',
    TOGGLE_FAVORITES_HOTEL: 'HTL:TOGGLE_FAVORITES_HOTEL',
    SET_DATE_CHECK_IN: 'HTL:SET_DATE_CHECK_IN',
    SET_DATE_CHECK_OUT: 'HTL:SET_DATE_CHECK_OUT',
    SET_TOTAL_DAYS: 'HTL:SET_TOTAL_DAYS'
}