import React, {Fragment, useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  ActivityIndicator,
  StatusBar,
} from 'react-native';

// import { Container } from './styles';

const Detail = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsersFromApi() {
      try {
        let response = await fetch('https://reqres.in/api/users?page=2');
        let responseJson = await response.json();
        let usersList = responseJson.data;
        setUsers(usersList);
      } catch (error) {
        alert('error');
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    setLoading(true);
    fetchUsersFromApi();
  }, [users.length]);

  return (
    <Fragment>
      {loading ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <StatusBar barStyle="light-content" />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={users}
            renderItem={({item}) => (
              <View>
                <Image
                  style={{width: 50, height: 50}}
                  source={{uri: item.avatar}}
                />
                <Text>{item.email}</Text>
              </View>
            )}
          />
        </View>
      )}
    </Fragment>
  );
};

Detail.navigationOptions = ({navigation}) => ({
  title: 'Detail',
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

export default Detail;
