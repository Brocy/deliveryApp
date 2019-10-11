import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Button,
  FlatList,
  StatusBar,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../style/style.js';

const Home = ({navigation}) => {
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

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  return (
    <View style={AppStyles.ContainerStyle}>
      <StatusBar barStyle="light-content" />
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
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={renderSeparator}
        style={AppStyles.FlatListStyle}
        data={itens}
        renderItem={({item}) => (
          <View style={AppStyles.FlatListItemContainerStyle}>
            <Text style={AppStyles.FlatListItemElementStyle}>{item.key}</Text>
            <TouchableHighlight
              onPress={() => {
                onItemRemove(item);
              }}>
              <Ionicons name="ios-trash" size={24} color="red" />
            </TouchableHighlight>
          </View>
        )}
      />
    </View>
  );
};

Home.navigationOptions = ({navigation}) => ({
  title: 'Home',
  headerRight: (
    <Button
      onPress={() => {
        navigation.goBack();
      }}
      title="+1"
      color="#fff"
    />
  ),
});

export default Home;
