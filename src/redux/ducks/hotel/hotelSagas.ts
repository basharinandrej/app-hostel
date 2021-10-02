import {put, takeEvery} from 'redux-saga/effects'
import hotelActions from "./hotelActions";
import {actionTypeHotel} from "./hotelTypes";

function* setDateCheckOutWorker() {
    yield put(hotelActions.setDateCheckOut())
}

export function* setDateCheckOutWatcher() {
    yield takeEvery(actionTypeHotel.SET_TOTAL_DAYS, setDateCheckOutWorker)
}
