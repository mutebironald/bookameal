import React from "react";
import {LoginForm } from "../components/users/LoginForm";
const fn =  () => Promise.resolve({})

// function setUp(){
//   const props ={
//     userLoginRequest: ()=>{},
//     loginData: ''
//   };
//   return shallow(<LoginForm userLoginRequest={jest.fn()} loginData={""}/>)
// }

function setup(loggedIn=true, admin=true){
  const props ={
    userLoginRequest: () => Promise.resolve({loggedIn: loggedIn, admin: admin}),
  }
  return shallow(<LoginForm {...props}/>)
}
describe("Login Component", () => {
  let wrapper;
  it("Test it mounts correctly", () => {
    wrapper = shallow(<LoginForm userLoginRequest ={fn}/>);
    expect(wrapper).toHaveLength(1);
  });

  it("component has divs", () => {
    wrapper = shallow(<LoginForm userLoginRequest ={fn}/>);
    expect( wrapper.find("div").length).toBe(7);
  })

  it("should handle change", () => {
    wrapper = shallow(<LoginForm userLoginRequest ={fn}/>);
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
  wrapper = shallow(<LoginForm userLoginRequest ={fn}/>);
  const mockFn = jest.fn()
    const evt = {
        preventDefault: mockFn
    }
    wrapper.instance().onSubmit(evt);
    expect(mockFn.mock.calls.length).toBe(1);

});

it("should submit false", () => {
  wrapper = setup(true, false);
  const mockFn = jest.fn()
    const evt = {
        preventDefault: mockFn
    }
    wrapper.instance().onSubmit(evt);
    expect(mockFn.mock.calls.length).toBe(1);

});

it("should submit false admin true", () => {
  wrapper = setup(true, "True");
  const mockFn = jest.fn()
    const evt = {
        preventDefault: mockFn
    }
    wrapper.instance().onSubmit(evt);
    expect(mockFn.mock.calls.length).toBe(1);

});

it("tests empty", () => {
  wrapper = setup();
  wrapper.instance().isEmpty('');
  wrapper.instance().isEmpty('dhgjsda');

});

it("tests errorClass", () => {
  wrapper = setup();
  wrapper.instance().errorClass('');
  wrapper.instance().errorClass('sdffsd');

});

it("tests errorClass", () => {
  wrapper = setup();
  wrapper.instance().validateField('email', 'xample@exam.com');

  wrapper.instance().validateField('password', 'xample@e');

  wrapper.instance().validateField('email', 'xampl');

  wrapper.instance().validateField('password', 'xa');

  wrapper.instance().validateField('emailwer', 'xample@exam.com');


});


});

