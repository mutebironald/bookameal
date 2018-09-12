import React from 'react';
import { CreateMenu } from '../../components/menus/CreateMenu';


describe("Create menu Component", () => {
    let wrapper;
    let mockFn;
    beforeEach(() => {
        mockFn = jest.fn();
        wrapper = shallow(<CreateMenu />)
    });

    it("renders successfully", () => {
        expect(wrapper).toHaveLength(1);
    });

    it("should handle onChange", () => {
        const event = {
            target: {
                name: "name",
                value: "test"
            }
        }

        wrapper.instance().onChange(event);
        expect(wrapper.instance().state.name).toEqual("test");
    });

    it("should submit", () => {
        const evt = {
            preventDefault: mockFn
        }
        wrapper.instance().onSubmit(evt);
        expect(mockFn.mock.calls.length).toBe(1);
    });




})
