import axios from "axios";
import { baseUrl } from "core/axios";
import {limitRequestHostel} from "./hotelTypes";

export default {
    getHotels: () => {
        return axios.get(`${baseUrl}?location=Moscow&currency=rub&checkIn=2021-11-10&checkOut=2021-11-12&${limitRequestHostel}`);
    }
}