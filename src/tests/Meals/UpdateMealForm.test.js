import React from 'react';
import  { UpdateMealForm } from '../../components/meals/UpdateMealForm';

function setup(update=true){
    const props = {
        updateMealRequest: () => Promise.resolve({updatedMeal: update}),
        id: 1,
    }
    return shallow(<UpdateMealForm {...props}/>)
}
describe("Update Meal component", () =>{
    let wrapper;
    let mockFn;
    beforeEach(() =>{
        const props = {
            updateMealRequest: () => Promise.resolve({updatedMeal:true}),
            id: 1,
        }
        wrapper = shallow(<UpdateMealForm {...props}/>)

    });
    mockFn = jest.fn();


    it("facilitates onChange", () => {
        const event ={
            target: {
                name: "here",
                value: "test"
            }
        };
        wrapper.instance().onChange(event);
        expect(wrapper.instance().state.name).toEqual("");
    });

    it("renders successfully", () => {
        expect(wrapper).toHaveLength(1);
    })


    it("should submit", () =>{
        const wrapper = setup()
        const evt = {
            preventDefault: mockFn
        }
        wrapper.instance().onSubmit(evt);
        expect(mockFn.mock.calls.length).toBe(1);
    });

    it("should submit", () =>{
        const wrapper = setup(false)
        const evt = {
            preventDefault: mockFn
        }
        wrapper.instance().onSubmit(evt);
        expect(mockFn.mock.calls.length).toBe(2);
    });

    
});
