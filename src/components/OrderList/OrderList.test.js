import React from 'react';
import { shallow } from 'enzyme';
import OrderList from './OrderList';
import store from './../../app/store'
import { Provider } from 'react-redux';
import { render, screen, fireEvent, act, queryByAttribute, waitFor } from '@testing-library/react';

import { orders } from './../../../data-source/food-db.json'

let testName = `OrderListComponent boundary test`

describe('boundary', () => {
  let component;

  beforeEach(() => {
    component = render(<Provider store={store}>
      <OrderList />
    </Provider>);
  });

  it(testName + ' should mount', async () => {
    expect(component).toBeDefined();
    expect(component.container).toBeDefined();
  });


  it(testName + ' should render orders mobile', async () => {
    await waitFor(() => {
      expect(component).toBeDefined();
      expect(component.container).toBeDefined();
      expect(component.container.innerHTML).toContain(orders[0].mobile);
    });
  })

  it(testName + ' should render orders email', async () => {
    await waitFor(() => {
      expect(component.container.innerHTML).toContain(orders[0].email);
    });
  })
  it(testName + ' should render orders quantity', async () => {
    await waitFor(() => {
      expect(component.container.innerHTML).toContain(orders[0].quantity);
    });
  })
  it(testName + ' should render orders paid', async () => {
    await waitFor(() => {
      expect(component.container.innerHTML).toContain(orders[0].paid);
    });
  })


});
