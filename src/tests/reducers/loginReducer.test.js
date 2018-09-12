import loginReducer from '../../reducers/loginReducer'
describe("login reducer", () => {
    it("expects initial state", () => {
        expect(loginReducer(undefined, {})).toEqual({
            message: '',
            error: null,
        })
    })

    it("changes state", () => {
        const actionCalled = {
            type:"LOGIN_USER",
            payload:"logged in"
            
        }
        expect(loginReducer({}, actionCalled)).toEqual({
            message: 'logged in',
           
        })
    })
})

