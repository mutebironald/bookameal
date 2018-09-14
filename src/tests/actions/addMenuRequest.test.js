import React from 'react';
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import MockAdapter from 'axios-mock-adapter';
import   { addMenuRequest }  from '../../actions/addMenuRequest';
import axiosInstance from '../../actions/instance';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mock = new MockAdapter(axiosInstance);

describe("Add meal to menu", () => {

    it("should add meal to menu", ()=>{
        const data = {id: "1"}
        mock.onPost("/api/v1/menu").reply(200, {id: "1"});
        
      
        const output = addMenuRequest(data.id)
        console.log(output, "output")
        expect(output).toEqual(undefined)

    });

    it("should add meal to menu", ()=>{
        const data = {id: "1"}
        mock.onPost("/api/v1/menu").reply(400, {id: "1"});
        
      
        const output = addMenuRequest(data.id)
        console.log(output, "output")
        expect(output).toEqual(undefined)

    });

})
