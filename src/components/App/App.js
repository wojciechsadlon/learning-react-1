import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/InfoContainer';
import Faq from '../FAQ/FAQContainer';
import MainLayout from '../MainLayout/MainLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={Faq} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;