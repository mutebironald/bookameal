import React from 'react';
import AdminMenu from '../../components/menus/AdminMenu';
import { MemoryRouter } from 'react-router-dom';

describe("Admin Menu component", () => {
    let wrapper;
    let mockFn;
    beforeEach(() => {
        mockFn = jest.fn();
        wrapper = shallow(<MemoryRouter><AdminMenu/></MemoryRouter>)
    });

    it("renders successfully", () => {
        expect(wrapper).toHaveLength(1);
    });
});
