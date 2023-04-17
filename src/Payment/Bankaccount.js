import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, Text, Image, TextInput,StyleSheet,Alert, TouchableOpacity } from 'react-native';


const Bankaccount = () => {
  const navigation = useNavigation();
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const handleProcessPayment = () => {
    if (bankName && accountNumber && ifscCode  ) {
      // All fields are filled in
      setAllFieldsFilled(true);
      Alert.alert(
        'Alert',
        'Payment Sucessfull',
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

  // const handleReset = () => {
  //   setBankName('');
  //   setAccountNumber('');
  //   setIfscCode('');
  //   setSuccess(false);
  // };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/net.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Net Banking Payment</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter bank name"
            style={styles.input}
            autoCapitalize="words"
            value={bankName}
            onChangeText={setBankName}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter account number"
            style={styles.input}
            keyboardType="numeric"
            maxLength={16}
            value={accountNumber}
            onChangeText={setAccountNumber}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter IFSC code"
            style={styles.input}
            autoCapitalize="characters"
            maxLength={11}
            value={ifscCode}
            onChangeText={setIfscCode}
          />
        </View>
        {/* {success ? (
          <View style={styles.successContainer}>
            <Text style={styles.successText}>Payment Successful!</Text>
            <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
              <Text style={styles.resetButtonText}>Make Another Payment</Text>
            </TouchableOpacity>
          </View>
        ) : ( */}
          <TouchableOpacity style={styles.payButton} onPress={handleProcessPayment}>
            <Text style={styles.payButtonText}>Pay Now</Text>
          </TouchableOpacity>
        {/* )} */}
      </View>
    </View>
  );
};



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    logo: {
      width: 30,
      height: 30,
      marginRight: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
    },
    content: {
      flex: 1,
      paddingHorizontal: 16,
      justifyContent: 'center',
    },
    inputContainer: {
      marginBottom: 16,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      paddingVertical: 8,
      paddingHorizontal: 12,
      fontSize: 16,
      color: '#333',
    },
    payButton: {
      backgroundColor: '#4caf50',
      paddingVertical: 16,
      borderRadius: 4,
      alignItems: 'center',
    },
    payButtonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    successContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    successText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color: '#4caf50',
    },
    resetButton: {
      backgroundColor: '#2196f3',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 4,
    },
    resetButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  

export default Bankaccount;
