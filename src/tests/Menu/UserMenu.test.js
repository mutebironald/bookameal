import React from 'react';
import UserMenu from '../../components/menus/UserMenu';
import getCurrentDay from '../../components/current'

function setup(){
    const props = {
        menu: {menu: [{id: 1, meals: {name: 'test'}}]}
    }
    
    return shallow(<UserMenu {...props} />);
}

describe("User Menu Component", () => {
    let wrapper;
    let mockFn;
    beforeEach(() => {
        mockFn = jest.fn();
        wrapper = shallow(<UserMenu/>)
    });
    it("renders successfully", () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should toggle', () => {

        const {
            modal
        } = wrapper.instance().state;
        wrapper.instance().toggle()
        expect(wrapper.instance().state.modal).toEqual(!modal)


        const {
            modal2
        } = wrapper.instance().state;
        wrapper.instance().toggle2()
        expect(wrapper.instance().state.modal2).toEqual(!modal2)

        wrapper.instance().toggle1({
            id: 2,
            name: "test",
            price: 1000
        });
        expect(wrapper.instance().state.id.id).toBe(2)

    });



})
