import React, {Component} from 'react';

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  Button,
  FlatList,
} from 'react-native';

// import { Container } from './styles';
const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 16,
    paddingTop: 22,
  },
  buttonsStyle: {
    backgroundColor: '#2CC990',
    margin: 4,
    padding: 10,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
  },
  flatListStyle: {
    width: '100%',
  },
  flatListItemContainerStyle: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  flatListItemElementStyle: {
    paddingTop: 10,
    fontSize: 18,
    height: 44,
  },
});

export default class DeliveryApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      itens: [
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
      ],
    };
  }

  componentDidMount() {
    let state = this.state;
    state.count = this.state.itens.length;
    this.setState(state);
  }

  addToItens = () => {
    let state = this.state;
    state.itens.push({key: this.state.text});
    state.count = this.state.itens.length;
    this.setState(state);
  };

  onItemRemove = item => {
    let state = this.state;
    let index = state.itens.indexOf(item);
    state.itens.splice(index, 1);
    state.count = this.state.itens.length;
    this.setState(state);
  };

  render() {
    return (
      <View style={appStyles.container}>
        <TextInput
          style={{width: '100%', height: 45}}
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({text})}
          value={this.state.text}
        />
        <Text>
          You clicked {this.state.count} times | {this.state.text}{' '}
        </Text>
        <TouchableHighlight
          style={appStyles.buttonsStyle}
          onPress={this.addToItens}>
          <Text>Click Here</Text>
        </TouchableHighlight>
        <FlatList
          style={appStyles.flatListStyle}
          data={this.state.itens}
          renderItem={({item}) => (
            <View style={appStyles.flatListItemContainerStyle}>
              <Text style={appStyles.flatListItemElementStyle}>{item.key}</Text>
              <Button
                title="X"
                color="red"
                onPress={() => {
                  this.onItemRemove(item);
                }}
              />
            </View>
          )}
        />
      </View>
    );
  }
}
