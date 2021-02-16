import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { RootState } from 'App/reducers/state';
import { rootReducers } from 'App/reducers';

export function configureStore(initialState?: RootState): Store<RootState> {
  let middleware = applyMiddleware(thunkMiddleware);

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducers as any, initialState as any, middleware) as Store<
    RootState
  >;

  if (module.hot) {
    module.hot.accept('App/reducers', () => {
      const nextReducer = require('App/reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
