import React from 'react';
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import MockAdapter from 'axios-mock-adapter';
import userSignupRequest from '../../actions/userSignupRequest';
import axiosInstance from '../../actions/instance';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("sign a user in", () => {
    it("should signup user", ()=>{
        const data = {title: "test", price: "1200", description:"test"}
        const mock = new MockAdapter(axiosInstance);
        mock.onPost("/auth/register").reply(200, data);
        
        const store = mockStore({ data: {} });
        const expectedAction = [
            {type: "SIGNUP_USER", payload: data}
        ]
        return store.dispatch(userSignupRequest (data)).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
    })


})
