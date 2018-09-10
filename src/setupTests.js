import Enzyme, { configure, mount, render, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import axios from 'axios';
import sinon from 'sinon';



// import jwt from "jsonwebtoken"

Enzyme.configure({ adapter: new Adapter() });


const mockStorage = {
    setItem: (key, val) => Object.assign(mockStorage, { [key]: val}),
    getItem: key => mockStorage[key]
};

global.localStorage = mockStorage;
global.axios = axios;
global.mount = mount;
global.render = render;
global.shallow = shallow;
global.sinon = sinon;


// localStorage.setItem(
//     "token",
//     jwt.sign(
//         {email:"test@test.com", }
//     )
// )
