import React from 'react';
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import MockAdapter from 'axios-mock-adapter';
import deleteMealRequest from '../../actions/deleteMealRequest';
import axiosInstance from '../../actions/instance';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe("Delete meals", () => {

    it("should delete meals", ()=>{
        const data = {title: "test", price: "1200", description:"test"}
        const mock = new MockAdapter(axiosInstance);
        mock.onGet("/api/v1/meals/").reply(200, data);
        
        const store = mockStore({ data: {} });
        const expectedAction = [
            {type: "GET_MEALS", data: data}
        ]
        return store.dispatch(deleteMealRequest(expectedAction) ).then(() => {
          expect(store.getActions()).toEqual([]);
        });
    })


})
