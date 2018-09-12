import React from 'react';
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import MockAdapter from 'axios-mock-adapter';
import userLoginRequest from '../../actions/userLoginRequest';
import axiosInstance from '../../actions/instance';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('log a registered user in', ()=>{

    it("should log user in", ()=>{
        const data = {title: "test", price: "1200", description:"test"}
        const mock = new MockAdapter(axiosInstance);
        mock.onPost("/auth/login").reply(200, data);
        
        const store = mockStore({ data: {} });
        const expectedAction = [
            {type: "LOGIN_USER", payload: data}
        ]
        return store.dispatch(userLoginRequest(data)).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
    })
});
