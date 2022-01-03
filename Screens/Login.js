import React from 'react'
import { View,TextInput,Button,StyleSheet,  ImageBackground, Dimensions, Keyboard, TouchableNativeFeedback} from 'react-native'
import MainButton from '../Components/MainButton';

const LoginScreen=props=>{

    return(
        <TouchableNativeFeedback onPress={()=>Keyboard.dismiss()}>
        <ImageBackground source={require('../assets/Images/GHIBanner.jpg')} resizeMode='cover' style={Style.Image}  >
        
         <View style={Style.mainView}>
         
          <View style={Style.textInputContiner}>
            <TextInput style={Style.input} placeholder='User Name'></TextInput>
            <TextInput style={Style.input} secureTextEntry={true} placeholder='Password'></TextInput>  
            <MainButton style={Style.button}  >{"Login"}</MainButton>        
          </View>  
        
            
            
           
         </View>
         </ImageBackground>
         </TouchableNativeFeedback>
         

    );
}

const Style= StyleSheet.create({
     mainView:{
         flex:1,
        // margin:0,
         
     },
      Image:{

        flex: 1,
        justifyContent: 'center',
       
      },
      textInputContiner:{
        // flexDirection:'column',
         justifyContent:'center',
         alignItems:'center',
          padding:50, 
          marginTop:100,         
         
       },
         input:{
             
             width:'100%',
             height:35,
             borderWidth:1,
             borderRadius:5,
             backgroundColor:'white',
             padding: 6,
             margin:10,
             textAlignVertical:'center'
         },
         button:{

            width:Dimensions.get('window').width/1.8,
         }
        
});

export default LoginScreen;
