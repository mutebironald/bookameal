import React from 'react';
import UpdateMealForm from '../../components/meals/UpdateMealForm';
import { MemoryRouter } from 'react-router-dom';

describe("Update Meal component", () => {
    let wrapper;
    let mockFn;
    beforeEach(() => {
        mockFn = jest.fn();
        wrapper = shallow(<MemoryRouter><UpdateMealForm/></MemoryRouter>)
    });
    it("renders successfully", () => {
        expect(wrapper).toHaveLength(1);
    });

    
});
