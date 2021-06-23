/* eslint import/no-extraneous-dependencies: 0 */
import { setupWorker } from 'msw';

import handlers from './handlers';

export default setupWorker(handlers);
