import React from 'react';
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import MockAdapter from 'axios-mock-adapter';
import addMenuRequest from '../../actions/addMenuRequest';
import axiosInstance from '../../actions/instance';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


// describe(" add item to menu", () => {
//     it("should add item to menu", () => {
//         const data = {title: "test", price: "1200", description:"test"}
//         const mock = new MockAdapter(axiosInstance);
//         mock.onPost("/api/v1/menu").reply(200, data);
        
//         const store = mockStore({ data: {} });
//         const expectedAction = [
//             {type: "ADD_MENU", payload: data}
//         ]
//         return store.dispatch(addMenuRequest(data)).then(() => {
//           expect(store.getActions()).toEqual(expectedAction);
//         });
 

//     })
// });
