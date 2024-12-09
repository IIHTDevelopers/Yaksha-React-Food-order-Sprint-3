import React from 'react';
import { shallow } from 'enzyme';
import PlaceOrder from './PlaceOrder';
import store from './../../app/store'
import { Provider } from 'react-redux';
import { render, screen, fireEvent, act, queryByAttribute, waitFor } from '@testing-library/react';

import { foods, orders } from './../../../data-source/food-db.json'

jest.mock("axios");

let boundaryTestName = `PlaceOrder boundary test`
let functionalTestName = `PlaceOrder functional test`


describe('ComponentTest', () => {
  let component;

  beforeEach(() => {
    component = render(<Provider store={store}>
      <PlaceOrder />
    </Provider>);
  });

  it(boundaryTestName + ' should mount Book without crashing', () => {
    expect(component).toBeDefined();
    expect(component.container).toBeDefined();
  });

  it(functionalTestName + ' should contain email field with id attribute with value email and having default value as empty string', async () => {
    await waitFor(() => {
      let emailElement = component.container.querySelector(`input[id='email']`);

      expect(emailElement).toBeDefined();
      expect(emailElement.value).toEqual('');
    })
  })

  it(functionalTestName + ' should contain email field with id attribute with value email and as a required field', async () => {
    await waitFor(() => {
      let emailElement = component.container.querySelector(`input[id='email']`);

      expect(emailElement.hasAttributes('required')).toBe(true);
    })
  })

  it(functionalTestName + ' should contain phone field with id attribute with value phone and having default value as empty string', async () => {
    await waitFor(() => {
      let phoneElement = component.container.querySelector(`input[id='phone']`);

      expect(phoneElement).toBeDefined();
      expect(phoneElement.value).toEqual('');
    })
  })

  it(functionalTestName + ' should contain phone field with id attribute with value phone and as a required field', async () => {
    await waitFor(() => {
      let phoneElement = component.container.querySelector(`input[id='phone']`);

      expect(phoneElement.hasAttributes('required')).toBe(true);
    })
  })

  it(functionalTestName + ' should contain phone field with id attribute with value phone and as a required field', async () => {
    await waitFor(() => {
      let phoneElement = component.container.querySelector(`input[id='phone']`);

      expect(phoneElement.hasAttributes('required')).toBe(true);
    })
  })


  it(functionalTestName + ' should contain quantity field with id attribute with value quantity and having default value as 1', async () => {
    await waitFor(() => {
      let quantityElement = component.container.querySelector(`input[id='quantity']`);

      expect(quantityElement).toBeDefined();
      expect(quantityElement.value).toEqual("1");
    })
  })

});

