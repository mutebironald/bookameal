import React from 'react';
import { SignupForm } from '../components/users/SignupForm';
import MockAdapter from 'axios-mock-adapter';


function setup(update=true){
    const props = {
        userSignupRequest: () => Promise.resolve({signedUp: update})
    }
    return shallow(<SignupForm {...props}/>)
}

describe("Admin sign up form", () => {
    let wrapper;
    let mockFn;
    let history;
    beforeEach(() => {
        history = {push: sinon.spy()}
        const props ={
            userSignupRequest: () => Promise.resolve({signedUp:true}),
        }
        wrapper = shallow(<SignupForm {...props} history={history}/>)
    });
    mockFn = jest.fn();

    it("should handle change", () => {
        const event = {
            target: {
                name: "name",
                value: "test"
            }
        }

        wrapper.instance().onChange(event);
        expect(wrapper.instance().state.name).toEqual("test")
    });

    it("should submit", () => {
        const evt = {
            preventDefault: mockFn
        }
        wrapper.instance().onSubmit(evt);
        expect(mockFn.mock.calls.length).toBe(1);

    });


})
