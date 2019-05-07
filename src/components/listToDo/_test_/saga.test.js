import sinon from 'sinon';
import api from '../../../utils/api';
import { runSaga } from 'redux-saga';
import { getTodos } from '../saga';


describe("test list toDos saga", () => {
    it('should call getTodos at least once and  return mockTodos to fake store ', async () => {
        const dispatched = [];

        const fakeStore = {
            getState: () => ({ toDos: 'test' }),
            dispatch: (action) => dispatched.push(action),
        }

        const mockTodos = [{
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur "
        }];

        const callback = sinon.stub(api, 'getPosts').callsFake(() => mockTodos);

        await runSaga(fakeStore, getTodos).toPromise();
        //console.log(dispatched);
        sinon.assert.calledOnce(callback);
        expect(dispatched).toEqual([{ type: '[TO_DO]/FETCH_TO_DOS_SUCCEDED', payload: { todos: mockTodos } }])

    });
});