/**
 * Adds all polyfills requierd for Internet Explorer 10 support.
 */
import 'core-js/fn/object/assign';
import 'core-js/fn/array/find';
import 'core-js/fn/promise';
import 'core-js/fn/weak-set';
import 'core-js/fn/weak-map';
import 'core-js/fn/set';
import 'core-js/fn/map';

/**
 * Import tooling needed to initialise adapter components
 */
import React, { Suspense } from 'react';
import { render } from 'react-dom';

/**
 * Import and initialise `DepartmentPreview` adapter if node exists in HTML.
 */
const node = document.querySelector('[data-webapp="preview-pages"]');

if (node) {
  const DepartmentPreviewAdapter = React.lazy(
    (): any => import('./components/adapters/DepartmentPreviewAdapter'),
  );

  const LoadingWrapper = (): JSX.Element => (
    <Suspense fallback={<div>Loading...</div>}>
      <DepartmentPreviewAdapter />
    </Suspense>
  );

  render(<LoadingWrapper />, node);
}
