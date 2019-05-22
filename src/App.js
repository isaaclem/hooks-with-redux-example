import React from 'react';
import { View } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import LocalStateScreen from './LocalStateScreen';
import ReduxStateScreen from './ReduxStateScreen'
import { store, persistor } from './configureStore';

const App = () => {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <>
            <View style={{ backgroundColor: '#3A91C2', flex: 1 }}>
              <LocalStateScreen />
            </View>
            <View style={{ backgroundColor: '#BAC23A', flex: 1 }}>
              <ReduxStateScreen />
            </View>
          </>
        </PersistGate>
      </Provider>
  );
}

export default App;
