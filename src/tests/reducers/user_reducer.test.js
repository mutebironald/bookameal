import user_reducer from '../../reducers/user_reducer';
describe("user  reducer", () => {
    it("expects initial state", () => {
        expect(user_reducer(undefined, {})).toEqual({
            message: '',
            token:'',
            error: null,
        })
    })

    it("changes state", () => {
        const actionCalled = {
            type:"successful_login",
            payload:"user signed up"
            
        }
        expect(user_reducer({}, actionCalled)).toEqual({
            message: 'user signed up',
           
        })
    })
})
