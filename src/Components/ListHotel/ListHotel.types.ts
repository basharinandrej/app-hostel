export type propsTypeListHotel = {
    hotels: hotelType[],
    toggleFavoritesHotel: (id: number) => void
    typeList?: 'small',
    additionalClassNames?: string[]
}

export type hotelType = {
    id: number,
    title: string,
    price: number,
    rating: number,
    totalDays: number
    checkIn: string
}