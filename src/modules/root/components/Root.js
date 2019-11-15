import React from 'react';
import { compose } from 'recompose';
import { GenerateRandomCode } from '../../generateRandomCode';
import { withPostMessageListener } from "../utils";

function App() {
  return (
    <div className="app">
      <GenerateRandomCode />
    </div>
  );
}

export default compose(
  withPostMessageListener(),
)(App);
