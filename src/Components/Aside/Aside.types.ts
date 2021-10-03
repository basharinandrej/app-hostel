import {hotelType} from "../ListHotel/ListHotel.types";
import React from "react";

export type propsTypeAside = {
    favoriteHotels: hotelType[]
    toggleFavoritesHotelHandler: (id: number) => void
    onSubmitForm: (e: React.FormEvent) => void
    onClickSortRatingHandler: (e: React.MouseEvent) => void
    onClickSortPriceHandler: (e: React.MouseEvent) => void
    locationRequest: string
    statusSortRating: 'none' | 'asc' | 'desc'
}