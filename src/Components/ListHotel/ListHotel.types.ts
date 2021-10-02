export type propsTypeListHotel = {
    hotels: hotelType[],
    toggleFavoritesHotel: (id: number) => void
}

export type hotelType = {
    id: number,
    title: string,
    price: number,
    rating: number,
    avatar?: string
}