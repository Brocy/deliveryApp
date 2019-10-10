import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Button,
  FlatList,
} from 'react-native';

import AppStyles from './src/style/style.js';

export default function DeliveryApp() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [itens, setItens] = useState([
    {key: 'Devin'},
    {key: 'Dan'},
    {key: 'Dominic'},
    {key: 'Jackson'},
    {key: 'James'},
    {key: 'Joel'},
    {key: 'John'},
    {key: 'Jillian'},
    {key: 'Jimmy'},
    {key: 'Julie'},
  ]);

  useEffect(() => {
    setCount(itens.length);
  }, [itens.length]);

  const addToItens = () => {
    if (itens.some(o => o.key === text)) {
      alert('Key Exist...');
      return;
    } else {
      setItens([...itens, {key: text}]);
      setCount(itens.length);
    }
  };

  const onItemRemove = item => {
    setItens(itens.filter(o => o !== item));
    setCount(itens.length);
  };

  return (
    <View style={AppStyles.ContainerStyle}>
      <TextInput
        style={{width: '100%', height: 45}}
        placeholder="Type here to translate!"
        onChangeText={txt => setText(txt)}
        value={text}
      />
      <Text>
        You clicked {count} times | {text}{' '}
      </Text>
      <TouchableHighlight
        style={AppStyles.ButtonsStyle}
        onPress={() => {
          addToItens();
        }}>
        <Text>Click Here</Text>
      </TouchableHighlight>
      <FlatList
        style={AppStyles.FlatListStyle}
        data={itens}
        renderItem={({item}) => (
          <View style={AppStyles.FlatListItemContainerStyle}>
            <Text style={AppStyles.FlatListItemElementStyle}>{item.key}</Text>
            <Button
              title="X"
              color="red"
              onPress={() => {
                onItemRemove(item);
              }}
            />
          </View>
        )}
      />
    </View>
  );
}
