import Enzyme, { configure, mount, render, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import axios from 'axios';
import sinon from 'sinon';
import {notify} from 'react-notify-toast';

Enzyme.configure({ adapter: new Adapter() });

const mockStorage = {}

const mockLocalStorage = {
    setItem: (key, val) => Object.assign(mockStorage, { [key]: val}),
    getItem: key => mockStorage[key],
    removeItem: key => mockStorage[key]
};

global.localStorage = mockLocalStorage;
global.axios = axios;
global.mount = mount;
global.render = render;
global.shallow = shallow;
global.sinon = sinon;
notify.show = jest.fn()

