import { all } from "redux-saga/effects";

import getToDosWatcher from '../listToDo/saga'

function* rootSaga() {
    yield all([getToDosWatcher()])
};


export default rootSaga;