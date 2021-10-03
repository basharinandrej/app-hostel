import {hotelType} from "../../Components/ListHotel/ListHotel.types";

export type selectorTypesMainPage = {
    hotels: Array<hotelType>,
    favoriteHotels: Array<hotelType>,
    locationRequest: string
    locationResponse: string
    checkIn: string
    isLoadingHotels: boolean
    sliderImages: string[]
    statusSortRating: 'none' | 'asc' | 'desc'
}