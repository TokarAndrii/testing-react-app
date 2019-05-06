import toDosActions from '../toDosActions';
import toDosTypes from '../toDosTypes'

describe("test toDosActions actions ", () => {
    it('should return: {type: toDosTypes.FETCH_TO_DOS_START} if call FETCH_TO_DOS_START', () => {
        const fetchStart = toDosActions.FETCH_TO_DOS_START();
        expect(fetchStart).toEqual({
            type: toDosTypes.FETCH_TO_DOS_START
        })
    });
    it('should return: {type: toDosTypes.FETCH_TO_DOS_SUCCEDED, payload: { data }} if call FETCH_TO_DOS_SUCCEDED([])', () => {
        const data = [];
        const fetchStart = toDosActions.FETCH_TO_DOS_SUCCEDED(data);
        expect(fetchStart).toEqual({
            type: toDosTypes.FETCH_TO_DOS_SUCCEDED,
            payload: { todos: data }
        })
    });
});