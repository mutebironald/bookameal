import React from 'react';
import Whoops404 from '../components/Whoops404';

describe("Not found component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Whoops404 />);
        
    });
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
