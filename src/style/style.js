import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  ContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginLeft: 16,
    marginRight: 16,
  },
  ButtonsStyle: {
    backgroundColor: '#2CC990',
    margin: 4,
    padding: 10,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
  },
  FlatListStyle: {
    width: '100%',
  },
  FlatListItemContainerStyle: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  FlatListItemElementStyle: {
    paddingTop: 10,
    fontSize: 18,
    height: 44,
  },
});
