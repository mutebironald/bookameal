import React from "react";
import { MemoryRouter } from "react-router-dom";
import {LoginForm } from "../components/users/LoginForm";

describe("Login Component", () => {
  const wrapper = shallow(<MemoryRouter>LoginForm</MemoryRouter>);
  it("Test it mounts correctly", () => {
    expect(wrapper).toHaveLength(1);
  });

 


  it("should set a new values on value change ", () => {
    const loginData = {
      email: "j@gmail.com",
      password: "Januzaj44#"
    };
    const props = {
      userLoginRequest: () => {},
    }
    const wrapper = shallow(<MemoryRouter><LoginForm {...props} /></MemoryRouter>);
    const loginComponent = wrapper.find("form")
    let username = wrapper.find('.login-input').first();
    username.simulate("change", {
      target: { name: "username", value: "Roninho"}

    });
    let password = loginComponent.find('input').first();
    password.simulate("change", {
    target: { name: "password", value: "Unhackable1" }
    });

        
    })
  


  });

