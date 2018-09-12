import addMealReducer from '../../reducers/addMealReducer';
describe("Add meal reducer", () =>{
    it("expects initial state", ()=>{
        expect(addMealReducer(undefined, {})).toEqual({
            message: '',
            error: null,
        })
    })
    it("changes state accordingly", ()=>{
        const actionCalled = {
            type:"ADD_MEAL",
            payload:"meal added"
            
        }
        expect(addMealReducer({}, actionCalled)).toEqual({
            message: 'meal added',
           
        })
    })
})
