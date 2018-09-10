import React from 'react';
import GetMeals from '../../components/meals/GetMeals';
import { MemoryRouter } from 'react-router-dom';

describe("Get Meal Component", () => {
    let wrapper;
    let mockFn;
    beforeEach(() => {
        mockFn = jest.fn();
        wrapper = shallow(<MemoryRouter><GetMeals/></MemoryRouter>)
    });
    it("renders successfully", () => {
        expect(wrapper).toHaveLength(1);
    });

    
});
