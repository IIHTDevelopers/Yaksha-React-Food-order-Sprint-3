import React from 'react'
import { shallow } from 'enzyme'
import Foods from './Foods'
import { render, screen, fireEvent, act, queryByAttribute, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from './../../app/store'

import { foods as foodsData } from './../../../data-source/food-db.json'

let testName = `FoodsComponent boundary test`

describe('ComponentTest', () => {
  let component;

  beforeEach(() => {

    component = render(<Provider store={store}>
      <Foods />
    </Provider>);
  })

  it(testName + ' should mount', () => {
    // expect(component.length).toBe(1)


    expect(component).toBeDefined();
    expect(component.container).toBeDefined();
  })

  it(testName + ' should render food image when food is availble', async () => {

    await waitFor(() => {
      expect(component).toBeDefined();
      expect(component.container).toBeDefined();

      // console.log(screen.getByRole('img', {src: "hello"}))
      // console.log(screen.getByAltText(foodsData[0].name))
      const image = screen.getByAltText(foodsData[0].name);

      expect(image.src).toContain(foodsData[0].image)

    });


  })




  it(testName + ' should render food name when food is availble', async () => {
    await waitFor(() => {
      expect(component).toBeDefined();
      expect(component.container).toBeDefined();
      expect(component.container.innerHTML).toContain(foodsData[0].name);
    });
  })

  it(testName + ' should render food type when food is availble', async () => {
    await waitFor(() => {
      expect(component).toBeDefined();
      expect(component.container).toBeDefined();
      expect(component.container.innerHTML).toContain(foodsData[0].type);
    });
  })


  it(testName + ' should render food price when food is availble', async () => {
    await waitFor(() => {
      expect(component).toBeDefined();
      expect(component.container).toBeDefined();
      expect(component.container.innerHTML).toContain(foodsData[0].price);
    });
  })


  it(testName + ' should render food ratings when food is availble', async () => {
    await waitFor(() => {
      expect(component).toBeDefined();
      expect(component.container).toBeDefined();
      expect(component.container.innerHTML).toContain(foodsData[0].ratings);
    });
  })

  it(testName + ' should not render food name when food is availble', async () => {
    await waitFor(() => {
      expect(component.container.innerHTML).not.toContain(foodsData[1].name);
    });
  })

})


