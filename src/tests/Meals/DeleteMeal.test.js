import React from 'react';
import { DeleteMeal } from '../../components/meals/DeleteMeal';
import MockAdapter from 'axios-mock-adapter';

function setup(deleted=true){
    const props  = {
        deleteMealRequest: () => Promise.resolve({deletedMeal: deleted})
    }
}
describe("Implement delete meal component", () => {
    let wrapper;
    let mockFn;
    beforeEach(() => {
        const  props =  {
            deleteMealRequest: () => Promise.resolve({deletedMeal:true}),
        }
        wrapper = shallow(<DeleteMeal {...props}/>)
        mockFn = jest.fn();
    });

    it("should handle change", () => {
        const event = {
            target: {
                name: "name",
                value: "test"
            }
        }

        wrapper.instance().handleChange(event);
        expect(wrapper.instance().state.name).toEqual("test")
    });

    it("should handle submit", () => {
        const evt = {
            preventDefault: mockFn
        }
        wrapper.instance().onSubmit(evt);
        expect(mockFn.mock.calls.length).toBe(1)

        wrapper.instance().onSubmit(evt)
        expect(wrapper.instance().state.meal_id).toBe("")
    });


    it("should render successfully", () => {
        expect(wrapper).toHaveLength(1);
    });

    it("should reset state after submission", () => {

    })

    it("deletes a meal", () => {

        const evt = {
            preventDefault: mockFn
        }
        wrapper.instance().delete(evt)
        expect(mockFn.mock.calls.length).toBe(1)
    })
})
