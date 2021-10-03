import {hotelType} from "../ListHotel/ListHotel.types";
import React from "react";

export type propsTypeFavorites = {
    favoriteHotels: hotelType[]
    toggleFavoritesHotelHandler: (id: number) => void
    onClickSortRatingHandler: (e: React.MouseEvent) => void
    onClickSortPriceHandler: (e: React.MouseEvent) => void
    statusSortRating: 'none' | 'asc' | 'desc'
}