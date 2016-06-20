import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

export default function configureStore(reducerName, initialState) {
  const store = createStore(
    require(`../reducers/${reducerName}`).default,
    initialState,
    compose(
      applyMiddleware(thunk)
    )
  );

  return store;
}
