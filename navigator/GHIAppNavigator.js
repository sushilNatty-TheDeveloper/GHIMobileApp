import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TripViewScreen from '../Screens/TripView';
import LoginScreen from '../Screens/Login';
 const GHINavigator= createStackNavigator({
    Login:{screen:LoginScreen},
    TripView: TripViewScreen,
    // tripDetails:{
        // screen:TripDetailsView
     //}  


});

export default createAppContainer(GHINavigator);