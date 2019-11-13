import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import Dashboard from './pages/Dashboard';
import Create from './pages/Create';

import Layout from './components/Layout';

import { routes } from './utils/routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path={routes.FEED} exact>
            <Feed />
          </Route>

          <Route path={routes.DASHBOARD}>
            <Dashboard />
          </Route>

          <Route path={routes.CREATE}>
            <Create />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
