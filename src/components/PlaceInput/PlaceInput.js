import React,{Component} from 'react';
import {TextInput,Button,StyleSheet,View} from 'react-native';
 

 export default class PlaceInput extends Component{

    state={
        placeName:""
    };
    
    placeNameChangedHandler = val =>{
        this.setState({
            placeName: val
        });
    }; 

    placeSubmitHandler = () =>{
        if (this.state.placeName.trim() === ""){
            return;
        }
        
        this.props.onPlaceAdded(this.state.placeName);
    };
    render(){
        return(
            <View style={styles.inputContainer}>
    <TextInput style={styles.placeInput}
                placeholder="Type Name"
                value={this.state.placeName}
                onChangeText={this.placeNameChangedHandler}
                /> 
    <Button title="Add" onPress={this.placeSubmitHandler} style={styles.palceButton}/>
    </View>

        )
    };


};



const styles = StyleSheet.create({
    inputContainer: {
        //flex: 1,
        width :"95%",
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center'
      },
      placeInput:{
        width:"70%"
      },
      palceButton:{
        width:"30%"
      },
});

