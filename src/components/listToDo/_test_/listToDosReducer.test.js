import listToDosReducer from '../listToDosReducer';
import listToDosTypes from '../toDosTypes'

export const toDos = [
    {
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "id": 2,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
]

describe("test reducer", () => {
    it('should return default state - an empty array', () => {
        const state = listToDosReducer(undefined, {});
        expect(state).toEqual([])
    });
    it('should return state - an array of toDos', () => {
        const newState = listToDosReducer(undefined, { type: listToDosTypes.FETCH_TO_DOS_SUCCEDED, payload: { "todos": toDos } });
        expect(newState).toEqual(toDos);
    })
});