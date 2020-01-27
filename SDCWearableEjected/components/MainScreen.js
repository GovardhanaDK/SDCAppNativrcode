import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {db} from '../firebase.js' 

 export default class MainScreen extends React.Component {

    constructor(props){
      super(props);
      this.state = {  
        total_aligners   : 0,
        each_aliner_days : 0,
        current_aligner_number : 0, 
        current_aligner_days : 0,
        display_number_of_days : 0,
        days_to_perfect_smile: 0
      }
      var vuser_id= props.user_id;
    var recentPostsRef = db.ref(`${vuser_id}/`);
    recentPostsRef.once('value').then(snapshot => {
      this.setState({total_aligners:snapshot.val().total_aligners}); 
      this.setState({each_aliner_days:snapshot.val().each_aliner_days}); 
      this.setState({current_aligner_number:snapshot.val().current_aligner_number}); 
      this.setState({current_aligner_days:snapshot.val().current_aligner_days}); 

      // snapshot.val().total_aligners
      this.setState({days_to_perfect_smile: ((this.state.each_aliner_days - this.state.current_aligner_days)) + ((this.state.total_aligners - this.state.current_aligner_number) * this.state.each_aliner_days)      }); 
      this.setState({display_number_of_days:  this.state.each_aliner_days -  this.state.current_aligner_days    });   
      // snapshot.forEach(function(childSnapshot) {
      //   var key = childSnapshot.key;
      //   if(key == vuser_id){
      //     check=1
      //   }
      // })
    }) 
  }   
 
    render(){
        return (
            <View style={{flexDirection:'column',flex:4}}>
              <View style={{flex:1,flexDirection:"column",justifyContent: 'center',alignItems: 'center'}}>
              <Text style={styles.titleText}>{this.state.display_number_of_days} more days on Aligner #1</Text>
              </View>
             <View style={{flex:2,flexDirection:"column",justifyContent: 'center',alignItems: 'center'}}>
             <AnimatedCircularProgress 
            size={240}
            width={30}
            fill={50}
            tintColor="#00e0ff"x
            backgroundColor="#3d5875" />
             </View>
             <View style={{flex:1,flexDirection:"column",justifyContent: 'center',alignItems: 'center'}}>
             <Text style={styles.titleText}>{this.state.days_to_perfect_smile} days to a perfect smile</Text>
                           </View>
            </View>       
      );   
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
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#979c98',
    // fontFamily: 'Arial',
  },
});



