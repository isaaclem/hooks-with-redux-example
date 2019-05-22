import React, { useState } from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

const LocaStateScreen = () => {
  const [counter, updateCounter] = useState(20);

  return (
    <View style={Styles.containerStyle}>
      <Text style={{ margin: 10 }}>Update using local state (Hooks)</Text>
      <Text style={{ margin: 10 }}>Current Counter is: {counter}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity
          style={Styles.buttonStyle}
          onPress={() => updateCounter(prevState => prevState + 1)}
        >
          <Text style={Styles.buttonTextStyle}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonStyle}
          onPress={() => updateCounter(prevState => prevState - 1)}
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

export default LocaStateScreen;
