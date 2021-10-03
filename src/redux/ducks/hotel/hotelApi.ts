import axios from "axios";
import { baseUrl } from "core/axios";
import {dataRequestHotel, limitRequestHotel} from "./hotelTypes";

export default {
    getHotels: (dataRequest:dataRequestHotel ) => {
        const {locationRequest, checkIn, checkOut} = dataRequest

        return axios.get(`${baseUrl}?location=${locationRequest}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=${limitRequestHotel}`);
    }
}