import React from 'react';
import GetOrders from '../../components/orders/GetOrders';
import Adapter from 'axios-mock-adapter';
import axios from 'axios';

const mock = new Adapter(axios);

function setup(){
    const props = {

    }
    return shallow(<GetOrders {...props} />);
}

describe("Get all customer orders", () => {
    let wrapper;
    let mockFn;
    beforeEach(() => {
        mockFn = jest.fn();
        wrapper = shallow(<GetOrders/>)
    });

    it("renders successfully", () => {
        expect(wrapper).toHaveLength(1)
    });


    it("should toggle", () => {
        const  {
            modal
        } = wrapper.instance().state
        wrapper.instance().toggle()
        expect(wrapper.instance().state.modal).toEqual(false)
    })

    it("should componentWillMount", () => {

        mock.onGet('/api/v1/orders').reply(200, {meals:[]});
        wrapper.instance().componentDidMount()
      
    })


})
