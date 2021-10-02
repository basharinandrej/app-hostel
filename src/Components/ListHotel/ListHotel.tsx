import React from 'react'
import { propsTypeListHostel } from './ListHotel.types'
import './ListHotel.sass'
import { iconsListHotel } from './ListHotel.icons'

const ListHotel = (props: propsTypeListHostel) => {
    const {
        avatar,
        title,
        price,
        rating
    } = props


    return (
        <ul className="list-hotel">

            <li className="list-hotel__hotel-card hotel-card">
                {avatar && <div className="hotel-card__avatar">
                    <img className="hotel-card__avatar-img"
                        src={avatar}
                        alt="avatar"/>
                    </div>
                }

                <div className="hotel-card__hotel-card-body hotel-card-body">
                    <div className="hotel-card-body__wrapper">
                        <div className="hotel-card-body__content">
                            <h3 className="hotel-card-body__title">{title}</h3>

                            <div className="hotel-card-body__paragraph-box">
                                <p className="hotel-card-body__paragraph">28 June, 2020</p>
                                &nbsp;&nbsp;
                                <span className="hotel-card-body__space"/>
                                &nbsp;&nbsp;
                                <p className="hotel-card-body__paragraph">1 день</p>
                            </div>
                        </div>

                        <div className="hotel-card-body__btn's">
                            <span className="hotel-card-body__favorites">
                                {iconsListHotel.heart}
                            </span>
                        </div>
                    </div>

                    <div className="hotel-card-body__wrapper">
                        <div className="hotel-card-body__rating">
                            {rating}
                        </div>

                        <p className="hotel-card-body__paragraph-price">
                            Price:
                            <b className="hotel-card-body__paragraph-price-bold">
                                {new Intl.NumberFormat('ru-RU').format(price)}&nbsp;₽
                            </b>
                        </p>
                    </div>
                </div>
            </li>

        </ul>
    )
}

export default ListHotel