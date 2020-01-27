import React, { Component } from 'react';
import MainScreen from './MainScreen.js';

import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import {
  StyleSheet,
  Text,
  View,   
  TextInput,
  Button, 
  TouchableHighlight, 
  Image,
  Alert 
} from 'react-native';
 
// const AppNavigator = createStackNavigator({
//   Setup: {
//     screen: Setup,
//   }, 
//   MainScreen:{
//     screen: MainScreen, 
//   }  
// });



export default class Setup extends Component {
 
  constructor(props) {
    super(props);
    state = {  
      total_aligners   : 0,
      each_aliner_days : 0,
      current_aligner_number : 0,
      current_aligner_days : 0
    }
  } 
//   handleClick = () => {
//     () => this.props.navigation.navigate('Setup')
//     alert('Hey')
// }

  render() {
    // const {navigate} = this.props.navigation;
    console.log("Props in set up", this.props);
    return (
      <View >
        <View >
          <Text style={styles.headings}>SET UP YOUR NEW TREATMENT</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Total number of aligners"
              keyboardType="numeric"
              underlineColorAndroid='transparent'
              onChangeText={(total) => this.setState({total_aligners:total})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Number of days to wear each aligner"
              keyboardType="numeric"
              underlineColorAndroid='transparent'
              onChangeText={(each_aliner_days) => this.setState({each_aliner_days})}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Your current aligner number"
              keyboardType="numeric"
              underlineColorAndroid='transparent'
              onChangeText={(current_aligner_number) => this.setState({current_aligner_number})}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Number of days for current aligner"
              keyboardType="numeric"
              underlineColorAndroid='transparent'
              onChangeText={(current_aligner_days) => this.setState({current_aligner_days})}/>
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this._nav }>
          <Text style={styles.loginText}>Set Up</Text>
        </TouchableHighlight>
      </View> 
    );
  }

  _nav()
  {
    this.props.navigation.navigate('MainScreen');
    Console.log("random");
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5700FF',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginLeft:50,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    marginLeft:50,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  },
  headings:{
    color: 'white',
    textAlign: "center",
    fontSize: 25,
    marginBottom:20
  }
});


// export default createAppContainer(AppNavigator);