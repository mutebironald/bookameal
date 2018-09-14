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




})
