import React from 'react';
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import MockAdapter from 'axios-mock-adapter';
import adminLoginRequest from '../../actions/adminLoginRequest';
import axiosInstance from '../../actions/instance';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('administrator login', ()=>{

    it("should log admin in", ()=>{
        const data = {title: "test", price: "1200", description:"test"}
        const mock = new MockAdapter(axiosInstance);
        mock.onPost("/auth/admin/login").reply(200, data);
        
        const store = mockStore({ data: {} });
        const expectedAction = [
            {type: "LOGIN_ADMIN", payload: data}
        ]
        return store.dispatch(adminLoginRequest(data)).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
    })
});
