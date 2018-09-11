import React from 'react';
import GetMeals from '../../components/meals/GetMeals';
import MockAdapter from 'axios-mock-adapter';
import axiosInstance from '../../actions/instance';

describe("Get Meal Component", () => {
            let wrapper;
            let mockFn;
            let data;
            beforeEach(() => {
                    data = {
                            Meals: [{
                                "id": 11,
                                "name": "kalo",
                                "price": 600
                            }]
                        },
                        mockFn = jest.fn();
                    const mock = new MockAdapter(axiosInstance);
                    mock.onGet("/api/v1/meals").reply(200, {
                        Meals: data.Meals
                    });
                    wrapper = shallow( < GetMeals updateMealRequest = {
                            mockFn
                        }
                        className = ""
                        id = {
                            1
                        }
                        />)
                    }); it("renders successfully", () => {
                    expect(wrapper).toHaveLength(1);
                });

                it("should reset after deletion", () => {
                    wrapper.instance().resetDeletion()
                    expect(wrapper.instance().state.id).toBe(null)
                });

                it('should toggle', () => {
                    wrapper.instance().toggle(1);
                    expect(wrapper.instance().state.id).toBe(1);

                    const {
                        modal2
                    } = wrapper.instance().state;
                    wrapper.instance().toggle2()
                    expect(wrapper.instance().state.modal2).toEqual(!modal2)

                    wrapper.instance().toggle1({
                        id: 2,
                        name: "test",
                        price: 1000
                    });
                    expect(wrapper.instance().state.name).toBe("test");
                })

                it("should handle onChange", () => {
                    const event = {
                        target: {
                            name: "name",
                            value: "test"
                        }
                    }

                    wrapper.instance().onChange(event);
                    expect(wrapper.instance().state.name).toEqual("test");
                })

                it("should submit", () => {
                    const evt = {
                        preventDefault: mockFn
                    }
                    wrapper.instance().onSubmit(evt);
                    expect(mockFn.mock.calls.length).toBe(2);
                })

                it("should delete meal", async () => {
                    const mock = new MockAdapter(axiosInstance);
                    wrapper.instance().setState({
                        id: 3
                    });
                    mock.onDelete("/api/v1/meals/3").reply(200, {
                        Meals: data.Meals
                    });
                    mock.onGet("/api/v1/meals").reply(200, {
                        Meals: data.Meals
                    });
                    await wrapper.instance().deleteMeal();
                    // expect(wrapper.instance().state.meals).toEqual(data.Meals);

                });

                it("renders successfully", () => {
                    expect(wrapper).toMatchSnapshot();
                });
            });
