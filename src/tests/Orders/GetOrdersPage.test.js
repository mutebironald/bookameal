import React from 'react'
import GetOrdersPage  from '../../components/orders/GetOrdersPage';

describe("Get orders page", () => {
    let wrapper;
    let mockFn;
    beforeEach(() => {
        const item = {id:1, name:"somethin"}
        wrapper = shallow(<GetOrdersPage item={item}/>)
    });
    it("renders successfully", () => {
        expect(wrapper).toHaveLength(1)
    });
})
