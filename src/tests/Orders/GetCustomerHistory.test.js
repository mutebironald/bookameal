import React from 'react';
import  GetCustomerHistory  from '../../components/orders/GetCustomerHistory';

describe("Get customer history", () => {
    let wrapper;
    let mockFn;
    beforeEach(()=> {
        wrapper = shallow(<GetCustomerHistory />)
    });

    it("should render correctly", ()=> {
        expect(wrapper).toMatchSnapshot();
    });

    it("renders successfully", () => {
        expect(wrapper).toHaveLength(1)
    });

});
