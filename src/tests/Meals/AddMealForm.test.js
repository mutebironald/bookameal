import React from 'react';
import { AddMealForm } from '../../components/meals/AddMealForm';
import MockAdapter from 'axios-mock-adapter';
import axiosInstance from '../../actions/instance';

describe( "Add Meal Component", () => {
    let wrapper;
    let mockFn;
    beforeEach(() => {
        mockFn = jest.fn();
        const  props =  {
            addMealRequest: () => {},
        }
        wrapper = shallow(<AddMealForm  {...props}/>)

    });

    it("should add meal successfully ", () => {
        const mock = new MockAdapter(axiosInstance)
        mock.onPost("/api/v1/meals").reply(200, {

        });
    });

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


    it("renders successfully", () => {
        expect(wrapper).toMatchSnapshot();
    });
})
