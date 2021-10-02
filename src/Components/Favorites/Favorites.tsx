import ListHotel from 'Components/ListHotel/ListHotel'
import React from 'react'
import './Favorites.sass'

const listHotel = {
    title: "Moscow Marriott Grand Hotel",
    price: 23_924,
    rating: 3,
}

const Favorites = () => {


    return (
        <div className="favorites">

            <h2 className="favorites__title">Избранное</h2>

            {/*<ListHotel*/}
            {/*    title={listHotel.title}*/}
            {/*    price={listHotel.price}*/}
            {/*    rating={listHotel.rating}*/}
            {/*/>*/}
        </div>
    )
}

export default Favorites