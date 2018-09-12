import getMenuReducer from '../../reducers/getMenuReducer';
describe("Get Menu reducer", () => {
    it("expects initial state", () => {
        expect(getMenuReducer(undefined, {})).toEqual({
            message: '',
            error: null,
        })
    })

    it("changes state", () => {
        const actionCalled = {
            type:"GET_MENU",
            payload:"get menu"
            
        }
        expect(getMenuReducer({}, actionCalled)).toEqual({
            message: 'get menu',
           
        })
    })
})

