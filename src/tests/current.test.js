import React from 'react'
import CurrentDay from '../components/current'

describe("AdminDashboard component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CurrentDay/>);

    });
    it("should render correctly", ()=> {
        expect(wrapper).toMatchSnapshot();
    })
    
})
