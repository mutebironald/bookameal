// import React from 'react';
// import AdminMenu from '../../components/menus/AdminMenu';
// import MockAdapter from 'axios-mock-adapter';

// describe("Defines the tests for AdminMenu component", () => {
//     let wrapper;
//     let mockFn;
//     let data;
//     beforeEach(() => {

//         data = {
//             Menu: [
//                 {
//                     "day": "monday",
//                     "meals": [
//                         {
//                             "id": 3,
//                             "name": "Rice with pilao",
//                             "price": 3400
//                         }
//                     ]
//                 }
//             ]},



//         mockFn = jest.fn();
//         const mock = new MockAdapter(axios);
//         mock.onGet("api/v1/menu").reply(200, {
//             Menu: data
//         });
//         wrapper = shallow(<AdminMenu  className=""/>)
//     });
//     it("renders successfully", () => {
//         expect(wrapper).toHaveLength(1);
//     })
// })
