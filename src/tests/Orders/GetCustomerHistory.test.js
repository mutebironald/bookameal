import React from 'react';
import GetCustomerHistory from '../../components/orders/GetOrderHistory';

describe("Get customer history", () => {
    let wrapper;
    let mockFn;
    beforeEach(()=> {
        wrapper = shallow(<GetCustomerHistory/>)
    });

    it("should render correctly", ()=> {
        expect(wrapper).toMatchSnapshot();
    });

});
