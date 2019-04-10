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
import React from 'react';
import { render } from 'react-dom';

/**
 * Import and initialise `DepartmentPreview` adapter as needed.
 */
import DepartmentPreviewAdapter from './components/adapters/DepartmentPreviewAdapter';

const node = document.querySelector('[data-webapp="preview-pages"]');

if (node) {
  render(<DepartmentPreviewAdapter />, node);
}
