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


describe("Login Component", () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<LoginForm userLoginRequest ={fn}/>);
  })
  it("Test it mounts correctly", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("component has divs", () => {
    expect( wrapper.find("div").length).toBe(7);
  })

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
  const mockFn = jest.fn()
    const evt = {
        preventDefault: mockFn
    }
    wrapper.instance().onSubmit(evt);
    expect(mockFn.mock.calls.length).toBe(1);

});

});

