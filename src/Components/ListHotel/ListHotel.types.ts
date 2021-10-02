export type propsTypeListHotel = {
    hotels: hotelType[],
    toggleFavoritesHotel: (id: number) => void
    typeList?: 'small'
}

export type hotelType = {
    id: number,
    title: string,
    price: number,
    rating: number,
    avatar?: string
}