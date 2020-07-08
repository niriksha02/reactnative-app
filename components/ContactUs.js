import React, { Component } from "react";
import {
  Alert,
  Text,
  ScrollView,
} from 'react-native';
import {
  Button,
  Card,
  Icon,
} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';

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
 sendMail() {
    MailComposer.composeAsync({
      recipients: ['confusion@food.net'],
      subject: 'Enquiry',
      body: 'To whom it may concern:',
    })
      .catch(error => Alert.alert(`Unable to send mail:\n${error}`));
  }
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
                <Button
              title=" Send Email"
              buttonStyle={{ backgroundColor: '#512DA8' }}
              icon={<Icon name="envelope-o" type="font-awesome" color="white" />}
              onPress={ContactUs.sendMail}
            />
                </Card>
                    </Animatable.View>
                    
      </ScrollView>
    );
  }
}
export default ContactUs;
