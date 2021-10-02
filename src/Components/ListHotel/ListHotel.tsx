import React from 'react'
import {hotelType, propsTypeListHotel} from './ListHotel.types'
import './ListHotel.sass'
import { iconsListHotel } from './ListHotel.icons'
import avatar from 'images/house.png'
import Rating from 'Components/Rating/Rating'
import moment from 'moment'
import {getFormattedListHotelClassNames} from "./ListHotel.functions";

const ListHotel = (props: propsTypeListHotel) => {
    const {
        hotels,
        toggleFavoritesHotel,
        typeList,
        additionalClassNames
    } = props

    return (
        <ul className={`${typeList === 'small' ? 'list-hotel--small' : ''} ${getFormattedListHotelClassNames(additionalClassNames)}`}>
            {hotels.map((hotel: hotelType, idx:number) => {
                return (
                    <li className="list-hotel__hotel-card hotel-card" key={idx}>
                        <div className="hotel-card__avatar">
                            <img className="hotel-card__avatar-img"
                                 src={avatar}
                                 alt="avatar"/>
                        </div>

                        <div className="hotel-card__hotel-card-body hotel-card-body">
                            <div className="hotel-card-body__wrapper">
                                <div className="hotel-card-body__content">
                                    <h3 className="hotel-card-body__title">{hotel.title}</h3>

                                    <div className="hotel-card-body__paragraph-box">
                                        <p className="hotel-card-body__paragraph">{moment(hotel.checkIn).format('DD MMM, yyyy')}</p>
                                        &nbsp;&nbsp;
                                        <span className="hotel-card-body__space"/>
                                        &nbsp;&nbsp;
                                        <p className="hotel-card-body__paragraph">{hotel.totalDays} день</p>
                                    </div>
                                </div>

                                <div className="hotel-card-body__btn's">
                            <span className="hotel-card-body__favorites"
                                  onClick={() => toggleFavoritesHotel(hotel.id)}>
                                {iconsListHotel.heart}
                            </span>
                                </div>
                            </div>

                            <div className="hotel-card-body__wrapper">
                                <div className="hotel-card-body__rating">
                                    <Rating rating={hotel.rating}/>
                                </div>

                                <p className="hotel-card-body__paragraph-price">
                                    Price:
                                    <b className="hotel-card-body__paragraph-price-bold">
                                        {new Intl.NumberFormat('ru-RU').format(hotel.price)}&nbsp;₽
                                    </b>
                                </p>
                            </div>
                        </div>
                    </li>
                )
            })}

        </ul>
    )
}

export default ListHotel