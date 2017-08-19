import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';
import BlogPage from './containers/BlogPage'; // eslint-disable-line import/no-named-as-default
import BlogItemPage from './containers/BlogItemPage'; // eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="blog" component={BlogPage} />
    <Route path="blog/:page" component={BlogPage} />
    <Route path="blog/:term/:path" component={BlogItemPage} />
    <Route path="fuel-savings" component={FuelSavingsPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
