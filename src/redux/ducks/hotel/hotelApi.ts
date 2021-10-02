import axios from "axios";
import { baseUrl } from "core/axios";
import {dataRequestHotel, limitRequestHotel} from "./hotelTypes";

export default {
    getHotels: (dataRequest:dataRequestHotel ) => {
        const {location, checkIn, checkOut} = dataRequest

        return axios.get(`${baseUrl}?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=${limitRequestHotel}`);
    }
}