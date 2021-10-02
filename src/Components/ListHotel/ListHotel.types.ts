export type propsTypeListHotel = {
    hotels: hotelType[]
}

export type hotelType = {
    title: string,
    price: number,
    rating: number,
    avatar?: string
}