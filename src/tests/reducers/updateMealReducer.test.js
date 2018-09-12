import updateMealReducer from '../../reducers/updateMealReducer';
describe("user signup reducer", () => {
    it("expects initial state", () => {
        expect(updateMealReducer(undefined, {})).toEqual({
            message: '',
            error: null,
        })
    })

    it("changes state", () => {
        const actionCalled = {
            type:"UPDATE_MEAL",
            payload:"meal updated"
            
        }
        expect(updateMealReducer({}, actionCalled)).toEqual({
            message: 'meal updated',
           
        })
    })
})
