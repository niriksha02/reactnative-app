import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Card } from "react-native-elements";
import * as Animatable from 'react-native-animatable';

class ContactUs extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Contact Us",
    headerStyle: {
      backgroundColor: "blue",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      color: "#fff",
    },
  };
  render() {
    return (
      <ScrollView>

              <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>                
                <Card
                    title='Contact Information'>

        
                <Text>121, Clear Water Bay Road </Text><Text></Text>
                <Text>Clear Water Bay, Kowloon</Text><Text></Text>
                <Text>HONG KONG</Text><Text></Text>
                <Text>Tel: +852 1234 5678</Text><Text></Text>
                <Text>Fax: +852 8765 4321</Text><Text></Text>
                <Text>Email:confusion@food.net</Text>
                </Card>
                    </Animatable.View>
                    
      </ScrollView>
    );
  }
}
export default ContactUs;
