import React from 'react'
import { CreateOrderPage } from '../../components/orders/CreateOrderPage';

describe("Create Order Page", () => {
    let wrapper;
    let mockFn;
    beforeEach(() => {
        mockFn = jest.fn();
        wrapper = shallow(<CreateOrderPage/>)
    });

    it("should render correctly", ()=> {
        expect(wrapper).toMatchSnapshot();
    });


});
