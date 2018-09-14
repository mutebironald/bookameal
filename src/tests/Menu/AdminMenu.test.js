import React from 'react';
import { AdminMenu } from '../../components/menus/AdminMenu';
import MockAdapter from 'axios-mock-adapter';
import getCurrentDay from '../../components/current'

describe("Add Menu component", () => {
    let wrapper;
    let mockFn;
    let data;
    beforeEach(()=> {
        mockFn = jest.fn();
        wrapper = shallow(<AdminMenu className=""/>)


        data = [
            {
              id: 1,
              meals: [{ id: 1, meal_name: "test", price: 1000 }],
              name: getCurrentDay()
            }
          ];
    })


    it("renders successfully", () => {
        expect(wrapper).toHaveLength(1);
    });

    it("renders successfully snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });

    // it("manipulates array to get menu object", () => {
        // const setDate = wrapper.instance().state();
        // wrapper.setState({ currentMenu: { day: today,  meals: [{ id: 1, meal_name: "test", price: 1000 }] }});


        // wrapper.instance().state("currentMenu") = {day: today,  meals: [{ id: 1, meal_name: "test", price: 1000 }] }


        // expect(wrapper.state("currentMenu")).toEqual(data[0]);

        // const today = getCurrentDay();
        // const instance = wrapper.instance()
        // wrapper.setProps({ currentMenu: { day: today,  meals: [{ id: 1, meal_name: "test", price: 1000 }] }})
        // instance.getMenu(today)
        // // wrapper.instance().setState({ currentMenu: { day: today,  meals: [{ id: 1, meal_name: "test", price: 1000 }] }});
        // console.log("++++++++++++++++++++++++++")
        // console.log(wrapper.state())
        // console.log(data, "menus", menus)
        // wrapper.instance().getMenu(today);
        // const { currentMenu } = wrapper.instance().state;
        // expect(currentMenu).toEqual(data[0]);
    //   });


    // it("manipulates array to get menu object", () => {
    //     const today = getCurrentDay();
    //     wrapper.instance().setState({ Menu: data });
    //     console.log(wrapper.state)
    //     // console.log("-------------7695[[[[[[[[[[[",data[0]["meals"], wrapper.state.meals)
    //     wrapper.instance().getMenu(today);
    //     const { currentMenu } = wrapper.instance().state;
    //     expect(currentMenu).toEqual(data[0]);
    //   });

})
