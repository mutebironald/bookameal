import React from 'react';
import { FormErrors } from '../FormErrors'

describe("FormError component", () => {
    let wrapper;
    let mockFn;
    beforeEach(() => {
        mockFn = jest.fn();
        const props = {
            formErrors: [{field: ''}]
        }
        wrapper = shallow(<FormErrors {...props}/>)
    })
    it("renders successfully", () => {
        expect(wrapper).toMatchSnapshot()
    })
   
})
