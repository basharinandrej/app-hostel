import axios from "axios";
import { baseUrl } from "core/axios";
import {limitRequestHostel} from "./hotelTypes";

export default {
    getHotels: (location: string) => {
        return axios.get(`${baseUrl}?location=${location}&currency=rub&checkIn=2021-11-10&checkOut=2021-11-12&${limitRequestHostel}`);
    }
}