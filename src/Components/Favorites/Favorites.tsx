import ListHotel from 'Components/ListHotel/ListHotel'
import React from 'react'
import './Favorites.sass'
import {propsTypeFavorites} from "./Favorites.types";
import ButtonFilter from "../UI/ButtonFilter/ButtonFilter";

const Favorites = (props: propsTypeFavorites) => {
    const {
        favoriteHotels,
        toggleFavoritesHotelHandler,
        onClickSortRatingHandler,
        onClickSortPriceHandler,
        statusSortRating,
        statusSortPrice
    } = props

    return (
        <div className="favorites">
            <h2 className="favorites__title">Избранное</h2>

            <div className="favorites__wrapper">
                <ButtonFilter
                    text="Рейтинг"
                    additionalClassNames={['favorites__btn-filter']}
                    onClick={onClickSortRatingHandler}
                    statusSort={statusSortRating}
                />
                <ButtonFilter
                    text="Цена"
                    additionalClassNames={['favorites__btn-filter']}
                    onClick={onClickSortPriceHandler}
                    statusSort={statusSortPrice}
                />
            </div>

            <ListHotel
                hotels={favoriteHotels}
                toggleFavoritesHotel={toggleFavoritesHotelHandler}
                typeList="small"
                additionalClassNames={['favorites__list-hotel']}
            />
        </div>
    )
}

export default Favorites