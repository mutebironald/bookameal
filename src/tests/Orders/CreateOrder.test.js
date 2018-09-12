import React from 'react';
import { CreateOrder } from '../../components/orders/CreateOrder';




describe("Create order component", () => {
    let wrapper;
    let mockFn;
    beforeEach(() => {
        mockFn = jest.fn();
        wrapper = shallow(<CreateOrder addOrderRequest = {() =>Promise.resolve({addOrder:true})}/>)
    });


    it("should render correctly", ()=> {
        expect(wrapper).toMatchSnapshot();
    });

    it("should submit", () => {
        const evt = {
            preventDefault: mockFn
        }
        wrapper.instance().onSubmit(evt);
        expect(mockFn.mock.calls.length).toBe(1);
    });

})
