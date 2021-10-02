import {hotelType} from "../ListHotel/ListHotel.types";
import React from "react";

export type propsTypeAside = {
    favoriteHotels: hotelType[]
    toggleFavoritesHotelHandler: (id: number) => void
    onSubmitForm: (e: React.FormEvent) => void
}