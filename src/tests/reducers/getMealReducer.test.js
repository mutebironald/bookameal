import getMealReducer from '../../reducers/getMealReducer';
describe("Get Meal reducer", () => {
    it("expects initial state", () => {
        expect(getMealReducer(undefined, {})).toEqual({
            message: '',
            error: null,
        })
    })

    it("changes state", () => {
        const actionCalled = {
            type:"ADD_MEAL",
            payload:"meals"
            
        }
        expect(getMealReducer({}, actionCalled)).toEqual({
            message: 'meals',
           
        })
    })
})

