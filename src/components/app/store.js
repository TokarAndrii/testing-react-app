import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMiddleware);
const enhancer = composeWithDevTools(middlewares);
const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);

export default store;

