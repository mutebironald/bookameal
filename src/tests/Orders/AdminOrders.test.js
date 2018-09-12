import React from 'react';
import { AdminOrders } from '../../components/orders/AdminOrders';


describe("Admin Order component", () => {
    let wrapper;
    let mockFn;
    beforeEach(() => {
        mockFn = jest.fn();
        wrapper = shallow(<AdminOrders/>)
    });
    

    it("should render correctly", ()=> {
        expect(wrapper).toMatchSnapshot();
    });


    it('should toggle', () => {
        const {
            modal
        } =  wrapper.instance().state;
        wrapper.instance().toggle()
        expect(wrapper.instance().state.modal).toEqual(modal);
    });


    it('should handle toggle2', () => {
        const {
            modal1
        } =  wrapper.instance().state;
        wrapper.instance().toggle1()
        expect(wrapper.instance().state.modal1).toEqual(!modal1);

    });

});
