import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { compose } from 'recompose';
import { withPostMessageListener } from "../utils";

const GenerateRandomCode = lazy(() => import('../../generateRandomCode'));

function Root() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Suspense fallback={<div>Loading...</div>}>
            <GenerateRandomCode />
          </Suspense>
        </Route>
      </Switch>

    </Router>
  );
}

export default compose(
  withPostMessageListener(),
)(Root);
