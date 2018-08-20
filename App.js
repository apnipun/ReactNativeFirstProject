/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
} from 'react-native';


import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceImage from './src/assets/image1.jpg';

export default class App extends React.Component {
  state = {
    places:[]
  };

  placeAddedHandler = placeName => {
    this.setState(prevState =>{
      return{
        places: prevState.places.concat({
          key: Math.random().toString(), 
          name:placeName,
          image:  PlaceImage
        })
      };
    });

  };

  placeDeletedHandler = key => {
    this.setState(prevState => {
        return{
          places: prevState.places.filter(place=>{
            return place.key !== key;
          })
        };
    });
  };

  render() {
    return (
      <View style={styles.container}>
    <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
    <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
