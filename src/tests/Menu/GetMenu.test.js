import React from 'react';
import axiosInstance from '../../actions/instance';
import MockAdapter from 'axios-mock-adapter';
import GetMenu from '../../components/menus/GetMenu';

describe("Get Menu component", () => {
    let wrapper;
    let mockFn;
    beforeEach(() => {
        wrapper = shallow(<GetMenu/>)
    });

    it("renders successfully", () => {
    expect(wrapper).toHaveLength(1);
     });

    it('should toggle', () => {
    const {
        modal
    } = wrapper.instance().state;
    expect(wrapper.instance().state.modal).toEqual(modal)

})


})


// })
// // describe("Get Menu component", () => {
// //     let wrapper;
// //     let mockFn;
// //     let data;
// //     beforeEach(() => {
// //         data = {
// //                 Menu : [
// //             {
// //                 "day": "monday",
// //                 "meals": [
// //                     {
// //                         "id": 3,
// //                         "name": "Rice with pilao",
// //                         "price": 3400
// //                     }
// //                 ]
// //             }]
// //         },
