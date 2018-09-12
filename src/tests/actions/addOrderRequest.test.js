import React from 'react';
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import MockAdapter from 'axios-mock-adapter';
import addOrderRequest from '../../actions/addOrderRequest';
import axiosInstance from '../../actions/instance';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('add order request', ()=>{

    it("should add order", ()=>{
        const data = {title: "test", price: "1200", description:"test"}
        const mock = new MockAdapter(axiosInstance);
        mock.onPost("/api/v1/orders").reply(200, data);
        
        const store = mockStore({ data: {} });
        const expectedAction = [
            {type: "ADD_ORDER", payload: data}
        ]
        return store.dispatch(addOrderRequest(data)).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
    })
});
