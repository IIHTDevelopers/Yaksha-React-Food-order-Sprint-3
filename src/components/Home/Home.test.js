import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

let testName = `HomeComponent boundary test`

describe('ComponentTest', () => {
    let component;

    beforeEach(() => {
      component = shallow(<Home />);
    });

    it(testName+' should mount', () => {
      expect(component.length).toBe(1);
    });

});
