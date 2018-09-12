import deleteMealReducer from '../../reducers/deleteMealReducer';
describe("delete meal reducer", () => {
    it("expects initial state", () => {
        expect(deleteMealReducer(undefined, {})).toEqual({
            message: '',
            error: null,
        })
    })

    it("changes state", () => {
        const actionCalled = {
            type:"DELETE_MEAL",
            payload:"meal deleted"
            
        }
        expect(deleteMealReducer({}, actionCalled)).toEqual({
            message: 'meal deleted',
           
        })
    })
})

