import React from  'react'
import { MemoryRouter } from 'react-router-dom'
import DeleteMeal from '../../components/meals/DeleteMeal';

describe("Delete Meal component", () => {
    let wrapper;
    let mockFn;
    beforeEach(() => {
        mockFn = jest.fn();
        wrapper = shallow(<MemoryRouter><DeleteMeal/></MemoryRouter>);
    });
    it("renders successfully", () => {
        expect(wrapper).toHaveLength(1);
    });
});
