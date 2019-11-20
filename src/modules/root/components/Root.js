import React, { lazy, Suspense } from 'react';
import { compose } from 'recompose';
import { withPostMessageListener } from "../utils";

const GenerateRandomCode = lazy(() => import('../../generateRandomCode'));

function Root() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GenerateRandomCode />
    </Suspense>
  );
}

export default compose(
  withPostMessageListener(),
)(Root);
