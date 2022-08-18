import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

let testName = `App boundary test`

describe('boundary', () => {
    let component;

    beforeEach(() => {
      component = shallow(<App />);
    });

    it(testName+' should mount it without crashing', () => {
      expect(component.length).toBe(1);
    });

});
