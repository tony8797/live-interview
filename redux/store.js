import { createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from '@/redux/rootReducer';

const initStore = () => createStore(rootReducer);

export default {
  wrapper: createWrapper(initStore, { debug: true }),
  initStore,
};
