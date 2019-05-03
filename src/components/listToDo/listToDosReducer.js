import toDosTypes from './toDosTypes';
const listToDosReducer = (state = [], { type, payload }) => {
    switch (type) {
        case toDosTypes.FETCH_TO_DOS_SUCCEDED:
            return payload.todos;
        default: return state;
    }
};

export default listToDosReducer;