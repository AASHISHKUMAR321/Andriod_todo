import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

const App = () => {
  let todos: String[] = ['js', 'react', 'node'];
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        onChangeText={t => setText(t)}
        style={{padding: 10, borderColor: 'teal', borderWidth: 2}}></TextInput>
    </View>
  );
};

export default App;
