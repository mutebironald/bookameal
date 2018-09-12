import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import MockAdapter from 'axios-mock-adapter';
import UpdateMealRequest from '../../actions/UpdateMealRequest';
import axiosInstance from '../../actions/instance';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe("Update meal", () => {

    it("should update meals", ()=>{
        const data = {title: "test", price: "1200", description:"test"}
        const mock = new MockAdapter(axiosInstance);
        mock.onPut("/api/v1/meals/").reply(200, data);
        
        const store = mockStore({ data: {} });
        const expectedAction = [
            {type: "UPDATE_MEAL", data: data}
        ]
        return store.dispatch(UpdateMealRequest(expectedAction) ).then(() => {
          expect(store.getActions()).toEqual([]);
        });
    })


})
