import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { updateCounter } from './actions/actions';

const ReduxStateScreen = () => {
    const dispatch = useDispatch();
    const mainR = useSelector(state => state.main);

  return (
    <View style={Styles.containerStyle}>
      <Text style={{ margin: 10 }}>Update using redux state (Hooks)</Text>
      <Text style={{ margin: 10 }}>Current Counter is: {mainR.counter}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity
          style={Styles.buttonStyle}
          onPress={() => dispatch(updateCounter(mainR.counter + 1))}
        >
          <Text style={Styles.buttonTextStyle}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonStyle}
          onPress={() => dispatch(updateCounter(mainR.counter - 1))}
        >
          <Text style={Styles.buttonTextStyle}>-</Text>
        </TouchableOpacity>
      </View>
    </View>    
  );
}

const Styles = {
  containerStyle: { justifyContent: 'center', alignItems: 'center', flex: 1 },
  buttonStyle: { backgroundColor: '#90ee90', padding: 10, paddingHorizontal: 20, borderRadius: 15 },
  buttonTextStyle: { color: 'white' }
}

export default ReduxStateScreen;
