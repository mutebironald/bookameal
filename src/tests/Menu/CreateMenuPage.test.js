import React from 'react';
import { AddMenuPage } from '../../components/menus/CreateMenuPage';

describe("Create menu page", () => {
    let wrapper;
    let mockFn;
    beforeEach(()  => {
        mockFn = jest.fn();
        wrapper = shallow(<AddMenuPage addMealRequest={mockFn}/>)

    })


    it("renders successfully", () => {
        expect(wrapper).toHaveLength(1);
    });

    it("renders successfully snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });
})
