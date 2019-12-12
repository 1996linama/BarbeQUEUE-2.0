/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import QueuePage from 'containers/QueuePage/Loadable';
import GlobalStyle from '../../global-styles';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`

export default function App() {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/queue" component={QueuePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
      <GlobalStyle />
    </Wrapper>
  );
}
