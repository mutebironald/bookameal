import React from 'react';
import GetOrders from '../../components/orders/GetOrders';

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


})
