import React from 'react';
import { GetOrderHistory } from '../../components/orders/GetOrderHistory';

describe("Get order history", () => {
    let wrapper;
    let mockFn;
    beforeEach(() => {
        wrapper = shallow(<GetOrderHistory/>)
    });

    it("should render correctly", ()=> {
        expect(wrapper).toMatchSnapshot();
    });


})
