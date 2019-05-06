import selectors from '../selectors';
describe("test selectors", () => {
    it('should return getToDos undefined for empty state', () => {
        const initialState = {};
        const received = selectors.getToDos(initialState);
        expect(received).toBeFalsy();
    });
    it('should return [] getToDos from state', () => {
        const initialState = { toDos: [] };
        const received = selectors.getToDos(initialState);
        expect(received).toBeTruthy();
    });
    it('should return getToDos [] the same as at initialState', () => {
        const initialState = { toDos: [] };
        const received = selectors.getToDos(initialState);
        expect(received).toEqual([]);
    });
})