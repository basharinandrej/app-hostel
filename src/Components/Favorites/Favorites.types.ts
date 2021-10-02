import {hotelType} from "../ListHotel/ListHotel.types";

export type propsTypeFavorites = {
    favoriteHotels: hotelType[]
    toggleFavoritesHotelHandler: (id: number) => void

}