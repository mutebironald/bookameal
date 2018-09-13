import React from 'react';
import  App   from '../App';

describe("App component", () => {
    let wrapper;
    let mockFn;
    beforeEach(() => {
        mockFn = jest.fn();
        wrapper = shallow(<App/>)

    });
    it("renders successfully", () => {
        expect(wrapper).toHaveLength(1);
    });
    
})
