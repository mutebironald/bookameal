import React from 'react';
import AdminOrders from '../../components/orders/AdminOrders';
import { MemoryRouter } from 'react-router-dom';

describe("Admin Order component", () => {
    let wrapper;
    let mockFn;
    beforeEach(() => {
        mockFn = jest.fn();
        wrapper = shallow(<MemoryRouter><AdminOrders/></MemoryRouter>)
    });

    it("renders successfully", () => {
        expect(wrapper).toHaveLength(1);
    });
});
