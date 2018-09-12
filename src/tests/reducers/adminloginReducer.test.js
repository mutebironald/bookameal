import adminloginReducer from '../../reducers/adminloginReducer';
describe("Admin login reducer", () => {
    it("expects initial state", () => {
        expect(adminloginReducer(undefined, {})).toEqual({
            message: '',
            error: null,
        })
    })

    it("changes state", () => {
        const actionCalled = {
            type:"LOGIN_ADMIN",
            payload:"logged in"
            
        }
        expect(adminloginReducer({}, actionCalled)).toEqual({
            message: 'logged in',
           
        })
    })
})
