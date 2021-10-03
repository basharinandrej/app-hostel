import {hotelType} from "Components/ListHotel/ListHotel.types";

export type initialStateTypeHostel = {
    hotels: hotelType[],
    favoriteHotels: hotelType[],
    locationRequest: string,
    locationResponse: string,
    totalDays: number,
    checkIn: string,
    checkOut: string,
    isLoadingHotels: boolean
}
export const limitRequestHotel = 10
export type actionTypeHotel = {type: string, payload: any}
export type dataRequestHotel = { locationRequest: string, checkIn: string, checkOut: string }

type coords = {
    lat: number
    lon: number
}
export type hotelResponseDataTypes = {
    hotelId: number
    hotelName: string
    locationId: number
    priceAvg: number
    priceFrom: number
    stars: number
    pricePercentile: {
        [key: number]: number
    }
    location: {
        country: string
        name: string
        state?: null
        geo: coords
    }
}

export const actionTypeHotel = {
    SET_HOTELS: 'HTL:SET_HOTELS',
    SET_LOCATION_REQUEST: 'HTL:SET_LOCATION_REQUEST',
    SET_LOCATION_RESPONSE: 'HTL:SET_LOCATION_RESPONSE',
    TOGGLE_FAVORITES_HOTEL: 'HTL:TOGGLE_FAVORITES_HOTEL',
    SET_DATE_CHECK_IN: 'HTL:SET_DATE_CHECK_IN',
    SET_DATE_CHECK_OUT: 'HTL:SET_DATE_CHECK_OUT',
    SET_TOTAL_DAYS: 'HTL:SET_TOTAL_DAYS',
    SET_IS_LOADING_HOTELS: 'HTL:SET_IS_LOADING_HOTELS',
}