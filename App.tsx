import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import LoginScreen from './Screens/Login';
import TripView from './Screens/TripView.js';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import GHIAppNavigator from './navigator/GHIAppNavigator';
 

//Register Fonts

const fetchFonts=()=>{
return Font.loadAsync({
  'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')

});
}
export default function App() {
  const [isfontLoaded,SetFont]=useState(false);
   if(!isfontLoaded)
   {
     return (<AppLoading startAsync={fetchFonts}  onFinish={()=>SetFont(true)}  onError={(err)=>console.log(err)}/>);
   }
  return (

    <View style={styles.container}>
     <GHIAppNavigator/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
   // alignItems: 'center',
    justifyContent: 'center',
  },
});
