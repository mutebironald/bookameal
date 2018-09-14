import React from 'react';
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import MockAdapter from 'axios-mock-adapter';
import  adminSignUpRequest  from '../../actions/adminSignUpRequest';
import axiosInstance from '../../actions/instance';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Signup an Administrator", () => {

    it("should signup admin", ()=>{
        const data = {email: "test@gmail.com", password: "1200Rewtf3", description:"test"}
        const mock = new MockAdapter(axiosInstance);
        mock.onPost("/auth/admin/register").reply(200, data);
        
        const store = mockStore({ data: {} });
        const expectedAction = [
            {type: "SIGNUP_ADMIN", payload: data}
        ]
        return store.dispatch(adminSignUpRequest (data)).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
    })


})
