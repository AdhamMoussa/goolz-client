import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import Dashboard from './pages/Dashboard';
import Create from './pages/Create';

import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Feed />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
