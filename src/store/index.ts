import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = (initialState: any) => {
  // @ts-ignore
  return createStore(
    () => {},
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
};

export default store;