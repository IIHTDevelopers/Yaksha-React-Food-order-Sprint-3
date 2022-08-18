import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import { render, screen, fireEvent, act, queryByAttribute, waitFor } from '@testing-library/react';

let testName = `CardComponent boundary test`

describe('ComponentTest', () => {
    let component;
    let food;

    beforeEach(() => {
      food = {
        "id": 123,
        "name": "Onion Pizza",
        "image": "https://images.pexels.com/photos/7813577/pexels-photo-7813577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "ratings": 3.4,
        "type": "veg",
        "available": true,
        "price": 300
      }
      component = shallow(<Card food={food} />);
    });

    it(`${testName} should mount`, () => {
      expect(component.length).toBe(1);
      expect(component).toBeTruthy();
    });


    it(`${testName} should render food image`, async () => {
      component = render(<Card food={food} />);

      expect(component.container.querySelector('img').src).toBe(food.image);
    });

    it(`${testName} should render food name`, async () => {
      component = render(<Card food={food} />);

      expect(component).toBeDefined();
      expect(component.container).toBeDefined();
      expect(component.container.innerHTML).toContain(food.name);

    });

    it(`${testName} should render food ratings`, async () => {
      component = render(<Card food={food} />);

      expect(component).toBeDefined();
      expect(component.container).toBeDefined();
      expect(component.container.innerHTML).toContain(food.ratings);
    });
  });

  