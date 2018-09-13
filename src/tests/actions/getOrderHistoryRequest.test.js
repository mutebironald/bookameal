import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import MockAdapter from 'axios-mock-adapter';
import getOrderHistoryRequest from '../../actions/getOrderHistoryRequest';
import axiosInstance from '../../actions/instance';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Update meal", () => {

    it("should update meals", () => {
        const data = {
            order: "test",
            price: "1200",
            description: "test"
        }
        const mock = new MockAdapter(axiosInstance);
        mock.onPost("api/v1/orders/users/").reply(200, data);

        const store = mockStore();
        const expectedAction = {
            type: "GET_ORDER",
            payload: data
        }
        return store.dispatch(getOrderHistoryRequest(data)).then(() => {
            expect(store.getActions()).toEqual([expectedAction]);

        });
    })


})
