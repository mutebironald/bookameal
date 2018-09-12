import signUpReducer from '../../reducers/signUpReducer';
describe("user signup reducer", () => {
    it("expects initial state", () => {
        expect(signUpReducer(undefined, {})).toEqual({
            message: '',
            error: null,
        })
    })

    it("changes state", () => {
        const actionCalled = {
            type:"SIGNUP_USER",
            payload:"user signed up"
            
        }
        expect(signUpReducer({}, actionCalled)).toEqual({
            message: 'user signed up',
           
        })
    })
})

