
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, Text, Image, TextInput, StyleSheet ,TouchableOpacity , Alert } from 'react-native';


const Upi = () => {
  const [upiId, setUpiId] = useState('');
  const navigation = useNavigation();
    const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const handleProcessPayment = () => {
    if (upiId  ) {
      // All fields are filled in
      setAllFieldsFilled(true);
           Alert.alert(
        'Alert',
        'Payment Request Sent',
        [
          
          { text: 'OK', onPress: () => { navigation.navigate('HomeScreen') } }
        ]
      );
    } else {
      // Display validation message
      setAllFieldsFilled(false);
      alert('All fields are required');
    }
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/upi.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>UPI Payment</Text>
      </View>
      <Image
              source= {require("../../assets/gpay.png")}
              style={styles.imageStyle}/>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter UPI ID"
            style={styles.input}
            autoCapitalize="none"
            value={upiId}
            onChangeText={setUpiId}
          />
        </View>
        
       
          <TouchableOpacity style={styles.payButton} onPress={handleProcessPayment}>
            <Text style={styles.payButtonText}>Pay Now</Text>
          </TouchableOpacity>
      
      </View>
    </View>
  );
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 80,
    height: 20,
    marginRight: 10,
  },
  imageStyle: {
    width: 300,
    height: 70,
    marginTop: 100,
    marginBottom: 50,
    alignSelf:'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
  payButton: {
    backgroundColor: '#2196f3',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  successContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resetButton: {
    borderWidth: 1,
    borderColor: '#2196f3',
    borderRadius: 5,
    padding: 10,
  },
  resetButtonText: {
    color: '#2196f3',
    fontSize: 16,
  },
});





export default Upi;
