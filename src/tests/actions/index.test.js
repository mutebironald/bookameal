import React from 'react';
import * as elements from '../../actions/index';
import { ADD_MEAL, UPDATE_MEAL, GET_MEALS, DELETE_MEAL } from '../../actions/types';


import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import MockAdapter from 'axios-mock-adapter';
import getMealsRequest from '../../actions/getMealsRequest';
import axiosInstance from '../../actions/instance';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const apiUrl = 'http://localhost:5000';

describe("tests index file", () => {
   it("tests addMeal success", () => {
       const data = {id: 1, name: 'test', price: 50000};
       const expectedAction = { type: ADD_MEAL, payload: data}

       const action = elements.addMealSuccess(data);
       expect(action).toEqual(expectedAction);
   });

   it("tests delete meal success", () => {
       const data = {id: 1}
       const expectedAction = { type: DELETE_MEAL, payload: {id:data.id}}
       const action = elements.deleteMealSuccess(data.id);
       expect(action).toEqual(expectedAction);
   });

   it("tests get meal", () => {
       let meals = [""]
       const expectedAction = { type: GET_MEALS, meals: meals }
       const action = elements.getMeals(meals)
       expect(action).toEqual(expectedAction);

    });



    it("should get all meals", ()=>{
        const data = {title: "test", price: "1200", description:"test"}
        const mock = new MockAdapter(axiosInstance);
        mock.onGet(`${apiUrl}/api/v1/meals`).reply(200, data);
        
        let meals = {
                 description: "test",
                 price: "1200",
                 title: "test",
               }
        const expectedAction = [
            {type: "GET_MEALS",  meals: meals}
        ]
        const store = mockStore({ data: {} }, expectedAction);

        return store.dispatch(elements.getAllMeals()).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
    })

    it("should delete meal", ()=>{
        const data = {id: 1}
        const mock = new MockAdapter(axiosInstance);
        let id =1
        mock.onDelete(`${apiUrl}/api/v1/meals/${id}`).reply(200, data.id);
        
        const expectedAction = [
            {payload: {id: 1}, type: "DELETE_MEAL"}
        ]
        const store = mockStore( expectedAction);

        return store.dispatch(elements.deleteMeal(data.id)).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });

    });


    it("should add meal", ()=>{
        const data = {id: "1",  name: "test", price: "1200"}
        const mock = new MockAdapter(axiosInstance);
        mock.onPost(`${apiUrl}/api/v1/meals`).reply(200, data);
        
        const store = mockStore({ data: {} });
        const expectedAction = [
            {type: "ADD_MEAL", payload: data}
        ]
        return store.dispatch(elements.addMeal(data)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    })


    
   


})
