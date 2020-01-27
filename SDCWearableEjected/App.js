import React from 'react';
import firebase from 'firebase';

import { StyleSheet,
  View, 
  TextInput,
  // Button,  
  TouchableHighlight,
  ActivityIndicator,
  Image, 
  Alert  } from 'react-native';
import { Container, Header, Body, Right, Title, Text, Content, Form, Item, Input, Label, Button } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { createStackNavigator } from 'react-navigation-stack';
// import {createStackNavigator, createAppContainer} from 'react-navigation';
import MainScreen from './components/MainScreen';
import {db} from './firebase.js'; 
// import { Roboto.ttf } from 'expo';
import { Ionicons } from '@expo/vector-icons'; 

import AppIntroSlider from 'react-native-app-intro-slider';



const slides = [
  {
    key:"total_aligners",
    image: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm8ChySYlmv11sz9_5SSmfFW0sGWq5TvPTMfcHyg5oOeHj1aaq&s',
    },
    title:"Total Number Of Aliginers",
    desc:"This is the total number of aligners that were assignied to you at the start of your journey to a PERFECT SMILE",    
    // des:"total_aligners",
  },
  {
    key:"each_aliner_days",
    image: {
      uri: 'https://cdn.hellosubscription.com/wp-content/uploads/2019/01/21110917/image_5c45ee9ccadbc.png',

    },
    title:"Each Aliginer Days",
    desc:"",
    // des:"each_aliner_days",
  },
  {
    key:"current_aligner_number",
    image: {
      uri:
        'https://cdn.vox-cdn.com/thumbor/6BkZdC5bwdSORd0ADTayX1UmXZU=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11944835/sdc2.jpg',
    },
    title:"Current Aliginer Number",
    desc:"",
    // des:"each_aliner_days",
  },
  {
    key:"current_aligner_days",
    image: {
      uri: 'https://i.insider.com/5e1354aa855cc24a002f6ea7?width=1100&format=jpeg&auto=webp',
    },
    title:"Current Aliginer Days",
    desc:"",
    // des:"total_aligners",
  },
 
];


const styles = StyleSheet.create({
  sliderInput:{
    borderBottomColor: '#000',
    borderBottomWidth: 2, 
    width:"50%",
  },
  image: {
    width: "98%",
    height: "50%",
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  loginButtonSection: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
 }
});

class Setup extends React.Component {

  
  
  constructor(props) {
    super(props);

    this.state = {  
      total_aligners   : 0,
      each_aliner_days : 0,
      current_aligner_number : 0, 
      current_aligner_days : 0,
      new_user_id:"",
      app_status : "1", 
      user_id:"",
      fontLoaded: true,
    
      //app status:
      //        1 : when user entering user_ID
      //        2 : when fetching data ..... loading will be shown on screen
      //        3 : new user user_id
      //        4 : new user set_up
      //        5 : main screen
    }

  }

  // async componentWillMount() {
  //   try{
  //     await Font.loadAsync({
  //   'Roboto': require('native-base/Fonts/Roboto.ttf'),
  //   'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  //   ...Ionicons.font,
  //  });
  //  this.setState({ fontLoaded: true });
  // }
  // catch (error) {
  //   console.log('error loading icon fonts', error);
  // } 
  // }


  _renderItem = ({ item }) => { 
    return (
      <View
      style={{
        flex: 1,
        backgroundColor: "#5700ff",
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: "0.5%"
      }}>
      <Text style={styles.title}>{item.title}</Text>
      
        
      {
      item.key == "total_aligners" ? <TextInput
                                        style={styles.sliderInput}
                                        textAlign={'center'}
                                        keyboardType="numeric"
                                        placeholder="Enter info here"
                                        onChangeText={(total_aligners) => this.setState({total_aligners})}
                                        // value={this.state.total_aligners.toString()}
           
                                        />:null
      } 
      {
      item.key == "each_aliner_days" ? <TextInput
                                        style={styles.sliderInput}
                                        textAlign={'center'}
                                         keyboardType="numeric"
                                        placeholder="Enter details here"
                                        onChangeText={(each_aliner_days) => this.setState({each_aliner_days})}
                                        // value={this.state.each_aliner_days.toString()}
          
                                        />:null
      }
      {
      item.key == "current_aligner_number" ? <TextInput
                                        style={styles.sliderInput}
                                        textAlign={'center'}
                                        keyboardType="numeric"
                                        placeholder="Enter details here"
                                        onChangeText={(current_aligner_number) => this.setState({current_aligner_number})}
                                        // value={this.state.current_aligner_number.toString()}
          
                                        />:null
      }
      {
      item.key == "current_aligner_days" ? <TextInput
                                        style={styles.sliderInput}
                                        textAlign={'center'}
                                        keyboardType="numeric"
                                        placeholder="Enter details here" 
                                        onChangeText={(current_aligner_days) => this.setState({current_aligner_days})}
                                        // value={this.state.current_aligner_days.toString()}
                                        
                                        />:null
      }

      
      <Image resizeMode='contain' style={styles.image} source={item.image} />
      {/* <Text style={styles.text}>Description : {'\n'}
    {item.desc}</Text> */}
      {/* <Text >{item.desc}</Text> */}
    </View>
    );
    
  }
  
  // _onSkip = () => {
  //   this.setState({ showRealApp: true });
  // };
  _Ppost=()=>
  {
    alert(db.ref());
    
    this.setState({ app_status:"5" });

  }
  
  _onDone = () => {
    alert(db.ref());
    var user = this.state.user_id.toString();
    
    db.ref(`${user}/`).set({
      total_aligners   : this.state.total_aligners.toString(),
      each_aliner_days : this.state.each_aliner_days.toString(),
      current_aligner_number : this.state.current_aligner_number.toString(), 
      current_aligner_days : this.state.current_aligner_days.toString(),
    }).
    then((data) => {
      alert("fullfilled");
    }).
    catch((err) => {   
      alert("rejected");
    });
    this.setState({app_status:"5"}); 
    alert("done");
  }

  _userLogin =()=> 
  {
    let check=0;
    var vuser_id= this.state.user_id.toString();
    var recentPostsRef = db.ref();
    recentPostsRef.once('value').then(snapshot => {
      snapshot.forEach(function(childSnapshot) {
        var key = childSnapshot.key;
        if(key == vuser_id){
          check=1
        }
      })

      if(check==0){
        alert("Incorrect UserId !!")
      }
      else
      this.setState({app_status:"5"})

    })

    
 /*
    {**

      Write the code to retrive the user data here
                        OR
      Fuction call to retrive data from firebase

    **} */
  
  /*
  If the user exists, use code below:
      this.setState({app_status:"5"});
    
  If user does not exist ,use code below:
       this.setState({app_status:"3"});

  
  */
 
  }
 
  
   
  render() {
    if (!this.state.fontLoaded) {
      return(<View>
        <ActivityIndicator/>
       
      </View>)
    }
    else
    switch(this.state.app_status)
    {
      case "1":
        return(
          // <View style={{alignContent:"center",alignItems:"center"}}>
          //     <TextInput
          //       style={{borderBottomColor: '#000',borderBottomWidth: 2,paddingTop:"40%",padding:10,width:"90%"}}
          //         textAlign={'center'}
          //         placeholder="Enter your User_ID here"
          //         onChangeText={(user_id) => {this.setState({user_id})}}
          //         // value={this.state.each_aliner_days.toString()}
          //     />


          //     <View style={{width:"100%",alignItems:"center"}}>
          //       <Button
                
          //       title="Log in"
          //       color="#f194ff"
                
          //       onPress={
                  
          //         this._userLogin}  />
          //       <Text>
          //         OR
          //       </Text>
                
          //     <Button title="New User" onPress={()=>this.setState({app_status:"3"})} />
          //     </View>
          // </View>
          
          <Container>
          <Header style={{paddingTop:30}}>
            <Body>
              <Title>Login</Title>
            </Body>
            {/* <Right>
              <Button onPress={()=>this.setState({app_status:"3"})} transparent>
                <Text>Singup</Text>
              </Button>
            </Right> */}
          </Header>
          <Content>
            <Grid>
              <Col>
              {/* <Image
                style={{height: 200, width:null, flex: 1, padding:1, marginTop:40}}
                source={require('assets/SDC.png')}
              /> */}
              </Col>
            </Grid>
            <Form style={{padding: 40}}>
                <Item floatingLabel>                
                  <Input  placeholder="Enter login UserID" onChangeText={(user_id) => {this.setState({user_id})}}/>
                </Item>
            </Form>
              <Button style={{width:"50%",alignSelf:"center",justifyContent:"center"}} rounded onPress={this._userLogin}>
                <Text>Login</Text>
              </Button>
              <Grid style={{padding: 40,alignSelf:"center"}}>
                <Text style={{alignSelf:"center"}} bold>New User?</Text>
                <Button transparent onPress={()=>this.setState({app_status:"3"})}>
                  <Text bold>Singup</Text>
                </Button>
              </Grid>
          </Content>
    </Container>
        );
        
        break;
      
      case "2":
 
          return(
            <View>
              <ActivityIndicator/>
             
            </View>
          );
       break;
      


      case "3":
        return (
          // <View>
          //     <TextInput
          //         style={{borderBottomColor: '#000',borderBottomWidth: 2,paddingTop:"20%" }}
          //           textAlign={'center'}
          //           placeholder="Enter your desired User_ID here"
          //           onChangeText={(new_user_id) =>
          //             {
                      
          //               this.setState({new_user_id})
          //             }
          //             }
          //           // modify the above line of code to call a function that sets the state and also
          //           // to check if the user id is alredy taken
          //           // set the app_status accordingly

          //           value={this.state.new_user_id.toString()}
          //       />
          //       <Button
                
          //       title="Register"
          //       color="#f194ff"
                
          //       onPress={()=> 
          //       {
          //         let check=0;
          //         var vuser_id= this.state.new_user_id.toString();
          //         var recentPostsRef = db.ref();
          //         recentPostsRef.once('value').then(snapshot => {
          //           snapshot.forEach(function(childSnapshot) {
          //             var key = childSnapshot.key;
          //             if(key == vuser_id){
          //               check=1;
          //               alert("already exist");
          //             }
          //           })
          //           if(check==0){
          //             this.setState({user_id:vuser_id})
          //             this.setState({app_status:"4"}) 
          //           }
                   
          //           // if(check==0){
          //           //   alert(check)
          //           //   db.ref(`${vuser_id}/`).push({
          //           //     total_aligners   : 0,
          //           //     each_aliner_days : 0,
          //           //     current_aligner_number : 0, 
          //           //     current_aligner_days : 0,
          //           //   })
          //           //   }
          //         }).catch((err) => {  
          //           this.setState({app_status:"6"})
          //           alert(err)
          //         });

          //       }}/>
          // </View>   
          <Container>
          <Header style={{paddingTop:30}}>
            <Body>
              <Title>Sign Up</Title>
            </Body>
          </Header>
          <Content>
            <Grid>
              <Col>
              {/* <Image
                style={{height: 200, width:null, flex: 1, padding:1, marginTop:40}}
                source={require('assets/SDC.png')}
              /> */}
              </Col>
            </Grid>
            <Form style={{padding: 40}}>
                <Item floatingLabel>                
                  <Input placeholder="Enter the UserID" onChangeText={(new_user_id) => {this.setState({new_user_id})}}/>
                </Item>
            </Form>
              <Button style={{width:"50%",alignSelf:"center",justifyContent:"center"}} rounded 
              onPress={()=> {
                                let check=0;
                                var vuser_id= this.state.new_user_id.toString();
                                var recentPostsRef = db.ref();
                                recentPostsRef.once('value').then(snapshot => {
                                  snapshot.forEach(function(childSnapshot) {
                                    var key = childSnapshot.key;
                                    if(key == vuser_id){
                                      check=1;
                                      alert("already exist");
                                    }
                                  })
                                  if(check==0){
                                    this.setState({user_id:vuser_id})
                                    this.setState({app_status:"4"}) 
                                  }
                                 
                                  // if(check==0){
                                  //   alert(check)
                                  //   db.ref(`${vuser_id}/`).push({
                                  //     total_aligners   : 0,
                                  //     each_aliner_days : 0,
                                  //     current_aligner_number : 0, 
                                  //     current_aligner_days : 0,
                                  //   })
                                  //   }
                                }).catch((err) => {  
                                  this.setState({app_status:"6"})
                                  alert(err)
                                });
              
                              }}>
                <Text>Register</Text>
              </Button>
              <Grid style={{padding: 40,alignSelf:"center"}}>
                <Button transparent onPress={()=>this.setState({app_status:"1"})}>
                  <Text bold>Go to Login Page</Text>
                </Button>
              </Grid>
          </Content>
    </Container>
        //   <Container>
        //       <Header style={{marginTop: 100}}>
        //         <Body>
        //           <Title>Singup</Title>
        //         </Body>
        //         <Right>
        //           <Button onPress={()=>this.setState({app_status:"1"})} transparent>
        //             <Text>Login</Text>
        //           </Button>
        //         </Right>
        //       </Header>
        //       <Content>
        //         <Form>
        //           <Item floatingLabel>
        //             <Input placeholder="Enter the UserID" onChangeText={(new_user_id) => {this.setState({new_user_id})}}/>
        //           </Item>
        //         </Form>
        //        <Button  style={[styles.margincss]} block                       
        //               onPress={()=> 
        //               {
        //                 let check=0;
        //                 var vuser_id= this.state.new_user_id.toString();
        //                 var recentPostsRef = db.ref();
        //                 recentPostsRef.once('value').then(snapshot => {
        //                   snapshot.forEach(function(childSnapshot) {
        //                     var key = childSnapshot.key;
        //                     if(key == vuser_id){
        //                       check=1;
        //                       alert("already exist");
        //                     }
        //                   })
        //                   if(check==0){
        //                     this.setState({user_id:vuser_id})
        //                     this.setState({app_status:"4"}) 
        //                   }
                         
        //                   // if(check==0){
        //                   //   alert(check)
        //                   //   db.ref(`${vuser_id}/`).push({
        //                   //     total_aligners   : 0,
        //                   //     each_aliner_days : 0,
        //                   //     current_aligner_number : 0, 
        //                   //     current_aligner_days : 0,
        //                   //   })
        //                   //   }
        //                 }).catch((err) => {  
        //                   this.setState({app_status:"6"})
        //                   alert(err)
        //                 });
      
        //               }}>
        //           <Text>Register</Text>
        //         </Button>
        //       </Content>
        // </Container>
          );
        
        
        break;


    case "4":
      return(
        <AppIntroSlider 
          slides={slides}
          renderItem={this._renderItem}
          onDone={this._onDone}
          showSkipButton={false}
          // onSkip={this._onSkip}
        />
      ); 
      
      break;
    
    case "5":
      return(  
        <MainScreen user_id={this.state.user_id}/>
      );
      break;

    default:
      alert("an error has occured");
      return(
          <Text>
            This is default
          </Text>
      );


    }
  
   

     
    


    




  }
} 




const RootStack = createStackNavigator(
  {
    Home: {screen:Setup},
    Main: {screen:MainScreen},
    
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    
  },

  
    

);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}








 





