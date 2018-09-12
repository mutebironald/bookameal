import MockAdapter from 'axios-mock-adapter';
import React from 'react';
import { AdminOrders } from '../../components/orders/AdminOrders';
import axiosInstance from '../../actions/instance';


describe("Admin Order component", () => {
    let wrapper;
    let mock;
    
    beforeEach(() => {
        // const mock = MockAdapter(axiosInstance)
        // mockFn = jest.fn();
         wrapper = shallow(<AdminOrders/>)
    });


    it("should handle change", () => {
        // const event = {
        //     target: {
        //         name: "name",
        //         value: "test"
        //     }
        // }

        // wrapper.instance().onChange(event);
        // expect(wrapper.instance().state.name).toEqual("test")
    });


    // it("should submit", () => {
    //     const evt = {
    //         preventDefault: mockFn
    //     }
    //     wrapper.instance().onSubmit(evt);
    //     expect(mockFn.mock.calls.length).toBe(1);

    // });


});
