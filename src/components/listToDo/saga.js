import { put, call, takeLatest, } from "redux-saga/effects";
import api from '../../utils/api';
import toDosTypes from './toDosTypes';
import toDosActions from "./toDosActions";

export function* getTodos() {
    const todos = yield call(api.getPosts);
    yield put(toDosActions.FETCH_TO_DOS_SUCCEDED(todos));
}

function* getToDosWatcher() {
    yield takeLatest(toDosTypes.FETCH_TO_DOS_START, getTodos)
}

export default getToDosWatcher