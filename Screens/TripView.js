import Recat, { useState } from "react";
import {
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
} from "react-native";
import Card from "../Components/Card";
import TitleText from "../Components/TitleText";
import BodyText from "../Components/BodyText";
import { Ionicons } from "@expo/vector-icons";
const TripViewScreen = (props) => {
  return (
    <ScrollView>
        <View style={Style.searchSection}>
        <Ionicons style={Style.searchIcon} name="ios-search" size={20} color="red"/>
        <TextInput
            style={Style.input}
            placeholder="Search"
            onChangeText={() => {}}
            underlineColorAndroid="transparent"
        />
    </View>
      <TouchableNativeFeedback>
        <Card style={Style.card}>
          <View style={Style.BodyTextView}>
            <TitleText style={Style.Schstatus}> Route : 1234</TitleText>
            <BodyText>
              <Text>
                {" "}
               Status :<Text style={Style.status}>Active</Text>{" "}
              </Text>
            </BodyText>
          </View>
          <View style={Style.BodyTextView}>
            <Text> PBG Delivery</Text>
            <BodyText style={Style.bodyText}>Driver : Mr. John</BodyText>
          </View>
          <View style={Style.BodyTextView}>
            <BodyText style={Style.bodyText}>Total Stops : 6</BodyText>
            <Text> Dispatched At: 1/4/2021 10:00</Text>
          </View>
          <View style={Style.BodyTextView}>
            <Text>
              {" "}
              Completed Stops :<Text style={Style.status}>
                {" "}
                2 out of 6
              </Text>{" "}
            </Text>
          </View>
        </Card>
        
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
      <Card style={Style.card}>
        <View style={Style.BodyTextView}>
          <TitleText style={Style.Schstatus}> Route : 42222</TitleText>
          <BodyText>
            <Text>
              {" "}
              Status :<Text style={Style.Schstatus}>  Scheduled</Text>{" "}
            </Text>
          </BodyText>
        </View>
        <View style={Style.BodyTextView}>
          <Text> PBG Delivery</Text>
          <BodyText style={Style.bodyText}>Driver : Mr. XXX</BodyText>
        </View>
        <View style={Style.BodyTextView}>
          <BodyText style={Style.bodyText}>Total Stops : 4</BodyText>
          <Text> EST Dispatch Time: 1/4/2021 13:00</Text>
        </View>
        <View style={Style.BodyTextView}>
          <Text>
            {" "}
            Completed Stops :<Text style={Style.status}>
              {" "}
              0 out of 4
            </Text>{" "}
          </Text>
        </View>
      </Card>
      
    </TouchableNativeFeedback>
    </ScrollView>
  );
};
const Style = StyleSheet.create({
     card:{
         padding:20,
         margin:10,
     },
  bodyText: {
    // margin:0,
  },
  Schstatus:{
    color: "red",
    fontWeight: "bold",
    alignItems: "flex-end",
      
  },
  status: {
    color: "green",
    fontWeight: "bold",
    alignItems: "flex-end",
  },
  BodyTextView: {
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    alignItems: "center",
  },
  textInputContiner: {
    // flexDirection:'column',
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
  },
  
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
searchIcon: {
    padding: 10,
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
 
},
});
export default TripViewScreen;
