import React from 'react'
import current from '../components/current'

describe("AdminDashboard component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<current/>);

    });
    it("should render correctly", ()=> {
        expect(wrapper).toMatchSnapshot();
    })
    
})
