import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import { applyMiddleware, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel1
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  undefined,
  compose(applyMiddleware(ReduxThunk))
);

export const persistor = persistStore(store, null, () => {
//   const { auth } = store.getState();
//   if (auth.userProfile) {
//     global.xxx = auth.userProfile.token;
//   }
});
