import React from 'react';
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import MockAdapter from 'axios-mock-adapter';
import addMealRequest from '../../actions/addMealRequest';
import axiosInstance from '../../actions/instance';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('add meal request', ()=>{

    it("should add meal", ()=>{
        const data = {title: "test", price: "1200", description:"test"}
        const mock = new MockAdapter(axiosInstance);
        mock.onPost("/api/v1/meals").reply(200, data);
        
        const store = mockStore({ data: {} });
        const expectedAction = [
            {type: "ADD_MEAL", payload: data}
        ]
        return store.dispatch(addMealRequest(data)).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
    })
});
