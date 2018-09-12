import addOrderReducer from '../../reducers/addOrderReducer';
describe("Add order reducer", () => {
    it("expects initial state", () => {
        expect(addOrderReducer(undefined, {})).toEqual({
            message: '',
            error: null,
        })
    })

    it("changes state", () => {
        const actionCalled = {
            type:"ADD_ORDER",
            payload:"order added"
            
        }
        expect(addOrderReducer({}, actionCalled)).toEqual({
            message: 'order added',
           
        })
    })
})
