import {hotelType} from "../ListHotel/ListHotel.types";

export type propsTypeAside = {
    favoriteHotels: hotelType[]
    toggleFavoritesHotelHandler: (id: number) => void
}