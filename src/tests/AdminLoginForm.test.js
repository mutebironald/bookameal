import React from 'react';
import { AdminLoginForm } from '../components/users/AdminLoginForm';
import MockAdapter from 'axios-mock-adapter';

function setup(update=true){
    const props = {
        adminLoginRequest: () => Promise.resolve({signedUp: update})
    }
    return shallow(<AdminLoginForm {...props}/>)
}

describe("Admin sign up form", () => {
    let wrapper;
    let mockFn;
    let history;
    beforeEach(() => {
        history = {push: sinon.spy()}
        const props ={
            adminLoginRequest: () => Promise.resolve({signedUp:true}),
        }
        wrapper = shallow(<AdminLoginForm {...props} history={history}/>)
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
