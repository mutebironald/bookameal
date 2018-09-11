import React from 'react';
import { UpdateMealPage } from '../../components/meals/UpdateMealPage';


describe("Facilitates updating of a meal", () => {
    let wrapper;
    let mockFn;
    beforeEach(() => {
        wrapper = shallow(<UpdateMealPage updateMealRequest={mockFn}/>)
    });

    it("renders successfully", () => {
        expect(wrapper).toHaveLength(1)
    })


})
