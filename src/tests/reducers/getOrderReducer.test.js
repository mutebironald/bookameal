import getOrderReducer from '../../reducers/getOrderReducer'
describe("Get order reducer", () => {
    it("expects initial state", () => {
        expect(getOrderReducer(undefined, {})).toEqual({
            message: '',
            error: null,
        })
    })

    it("changes state", () => {
        const actionCalled = {
            type:"GET_ORDER",
            payload:"logged in"
            
        }
        expect(getOrderReducer({}, actionCalled)).toEqual({
            message: 'logged in',
           
        })
    })
})

