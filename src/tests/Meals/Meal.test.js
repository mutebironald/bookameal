import React from 'react';
import Meal from '../../components/meals/Meal';
import MockAdapter from 'axios-mock-adapter';

describe("Meal list component", () => {
    let wrapper;
    let mockFn;
    beforeEach(() =>{
        wrapper = shallow(<Meal className="help"/>)
    })

    it("should toggle", ()=>{
        const {modal} = wrapper.instance().state;
        wrapper.instance().toggle();
        expect(wrapper.instance().state.modal).toEqual(!modal)

    })
})
