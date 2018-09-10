import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AddMealForm from '../../components/meals/AddMealForm';

describe("Add Meal Component", () => {
    let wrapper;
    let mockFn;
    beforeEach(() => {
        mockFn = jest.fn();
        wrapper = shallow(<MemoryRouter><AddMealForm/></MemoryRouter>)
    });
    it("renders successfully", () => {
        expect(wrapper).toHaveLength(1);
    });
});
