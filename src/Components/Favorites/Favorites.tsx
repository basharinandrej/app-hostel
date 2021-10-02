import ListHotel from 'Components/ListHotel/ListHotel'
import React from 'react'
import './Favorites.sass'
import {propsTypeFavorites} from "./Favorites.types";

const Favorites = (props: propsTypeFavorites) => {
    const {favoriteHotels, toggleFavoritesHotelHandler} = props

    return (
        <div className="favorites">

            <h2 className="favorites__title">Избранное</h2>

            <ListHotel
                hotels={favoriteHotels}
                toggleFavoritesHotel={toggleFavoritesHotelHandler}
            />
        </div>
    )
}

export default Favorites