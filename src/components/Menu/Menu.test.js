import React from 'react';
import { render, screen, fireEvent, act, queryByAttribute, waitFor } from '@testing-library/react';
import Menu from './Menu';
import { Router, Switch, Route } from 'react-router-dom'
import Home from '../Home/Home';
import { shallow } from 'enzyme';
import { createMemoryHistory } from "history";

let boundaryTestName = `MenuComponent boundary test`
let functionalTestName = `MenuComponent functional test`

describe('boundary', () => {
    let component;
    let brComp;
    const history = createMemoryHistory();

    beforeEach(() => {
      brComp = <Router history={history}>
        <Menu />
        <br />
        <Switch>
          <Route path='/' exact component={() => <Home />} />
        </Switch>
      </Router>;
    });


    it(boundaryTestName+' should be rendered', () => {
      component = shallow(brComp);

      expect(component.length).toBe(1);
      expect(component).toBeTruthy();
    });

    it(functionalTestName+' should contain 2 links', () => {
      component = render(brComp);
      const anchors = component.container.querySelectorAll('a[href]');
      expect(anchors.length).toBe(2);
    });

    it(functionalTestName+' should route to home page when first link clicked', () => {
      component = render(brComp);

      // default route
      expect(history.location.pathname).toBe('/');

      const anchors = component.container.querySelectorAll('a[href]');

      // after clicking first link route
      fireEvent.click(anchors[0]);
      expect(history.location.pathname).toBe('/');
    });

    it(functionalTestName+' should contain first link with text home', () => {
      component = render(brComp);
      const anchors = component.container.querySelectorAll('a[href]');

      expect(anchors[0].textContent.toLowerCase()).toContain('home');
    });

    it(functionalTestName+' should route to foods page when sencond link is clicked', () => {
      component = render(brComp);

      // default route
      expect(history.location.pathname).toBe('/');

      const anchors = component.container.querySelectorAll('a[href]');

      // after clicking second link route
      fireEvent.click(anchors[1]);
      expect(history.location.pathname).toBe('/foods');
    });

    it(functionalTestName+' should contain second link with text foods', () => {
      component = render(brComp);
      const anchors = component.container.querySelectorAll('a[href]');

      expect(anchors[1].textContent.toLowerCase()).toContain('foods');
    });


  });

  