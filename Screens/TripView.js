import Recat, {useState} from 'react';
import { Text, TouchableNativeFeedback } from 'react-native';
import Card from '../Components/Card';
const TripView= props=>{
    return (
        <TouchableNativeFeedback>
            <Card>
            <Text> Trip :1234</Text>
            
            </Card>
        
        
        </TouchableNativeFeedback>
    )
    

}
export default TripView;