import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import MockAdapter from 'axios-mock-adapter';
import getOrderHistoryRequest from '../../actions/getOrderHistoryRequest';
import axiosInstance from '../../actions/instance';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

//test does not pass.
describe("Update meal", () => {

    it("should update meals", ()=>{
        const data = {title: "test", price: "1200", description:"test"}
        const mock = new MockAdapter(axiosInstance);
        mock.onPost("api/v1/orders/users/").reply(200, data);
        
        const store = mockStore({ data: {} });
        const expectedAction = [
            {type: "GET_ORDER", data: data}
        ]
        return store.dispatch(getOrderHistoryRequest(expectedAction) ).then(() => {
          expect(store.getActions()).toEqual([expectedAction]);

        });
    })


})
