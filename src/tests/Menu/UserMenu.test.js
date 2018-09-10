import React from 'react';
import UserMenu from '../../components/menus/UserMenu';
import { MemoryRouter } from 'react-router-dom';

describe("User Menu Component", () => {
    let wrapper;
    let mockFn;
    beforeEach(() => {
        mockFn = jest.fn();
        wrapper = shallow(<MemoryRouter><UserMenu/></MemoryRouter>)
    });
    it("renders successfully", () => {
        expect(wrapper).toHaveLength(1);
    })
})
