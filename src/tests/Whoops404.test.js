import React from 'react';
import Whoops404 from '../components/Whoops404';


describe("Not found component", () => {
    let wrapper;
    beforeEach(() => {
        const location = {
            pathname: ""
        }
        wrapper = shallow(<Whoops404 location={location} />);
        
    });
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
