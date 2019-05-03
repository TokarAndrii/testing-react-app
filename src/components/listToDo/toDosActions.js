import toDosTypes from './toDosTypes';

const FETCH_TO_DOS_START = () => ({
    type: toDosTypes.FETCH_TO_DOS_START
});

const FETCH_TO_DOS_SUCCEDED = todos => ({
    type: toDosTypes.FETCH_TO_DOS_SUCCEDED,
    payload: { todos }
});



export default { FETCH_TO_DOS_START, FETCH_TO_DOS_SUCCEDED }