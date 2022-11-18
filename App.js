import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';
import PaymentScreen from './Payment';

const App = () => {
  return (
    <View>
      <StripeProvider
        publishableKey={
          'pk_test_51M4p8uSD4W46KbU4lki61KLET6YB5WXOYMs5B9ZiT1rYouyfchjbeTrMgObBAkpSW2xENMPGiQ9QoRD8Il8nxy5i00Rcu0VubV'
        }
        merchantIdentifier="merchant.identifier" // required for Apple Pay
        urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      >
        <PaymentScreen />
      </StripeProvider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
