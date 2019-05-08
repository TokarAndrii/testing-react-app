import sagaHelper from 'redux-saga-testing';
import sinon from 'sinon';
import api from '../../../utils/api';
import { call } from 'redux-saga/effects';
import { getTodos } from '../saga';

sinon.stub(api, 'getPosts').callsFake(() => null);

describe("Test saga with redux-saga-testing package", () => {
    const it = sagaHelper(getTodos());
    it('should have called the mock API first', result => {
        expect(result).toEqual(call(api.getPosts));
    });
})