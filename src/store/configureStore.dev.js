import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

export default function configureStore(reducerName, initialState) {
  const store = createStore(
    require(`../reducers/${reducerName}`).default,
    initialState,
    compose(
      applyMiddleware(thunk, createLogger()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(`../reducers/${reducerName}`, () => {
      const nextRootReducer = require(`../reducers/${reducerName}`);
      store.replaceReducer(nextRootReducer);
    })
  }
  
  return store;
}
