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
//import PlaceImage from './src/assets/image1.jpg';
import { connect } from 'react-redux';
import {addPlace, deletePlace } from './src/store/actions/index';

class App extends React.Component {
  placeAddedHandler = placeName => {
   this.props.onAddPlace(placeName);

  };

  placeDeletedHandler = key => {
    this.props.onDeletePlace(key);
  };

  render() {
    return (
      <View style={styles.container}>
    <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
    <PlaceList places={this.props.places} onItemDeleted={this.placeDeletedHandler}/>
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

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: (key) => dispatch(deletePlace(key))
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
