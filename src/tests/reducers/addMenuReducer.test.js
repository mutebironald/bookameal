import addMenuReducer from '../../reducers/addMenuReducer';
describe("Add Menu Reducer", () => {
    it("expects initial state", () => {
        expect(addMenuReducer(undefined, {})).toEqual({
            message: '',
            error: null,
        })
    })

    it("changes state", () => {
        const actionCalled = {
            type:"ADD_MENU",
            payload:"meal added"
            
        }
        expect(addMenuReducer({}, actionCalled)).toEqual({
            message: 'meal added',
           
        })
    })
})
