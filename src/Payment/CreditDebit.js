
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';


const CreditDebit = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvc, setCVC] = useState('');
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
 

  const handleProcessPayment = () => {
    if (amount && cardNumber && expMonth && expYear && cvc ) {
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source= {require("../../assets/card.png")} />
        <Text style={styles.title}>Payment Details</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Cardholder Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Cardholder Name"
            onChangeText={setAmount}
            value={amount}
            //keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Card Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter card number"
            onChangeText={setCardNumber}
            value={cardNumber}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.row}>
          <View style={[styles.inputContainer, { marginRight: 10 }]}>
            <Text style={styles.label}>Expiry Month</Text>
            <TextInput
              style={styles.input}
              placeholder="MM"
              onChangeText={setExpMonth}
              value={expMonth}
              keyboardType="numeric"
            />
          </View>
          <View style={[styles.inputContainer, { marginLeft: 10 }]}>
            <Text style={styles.label}>Expiry Year</Text>
            <TextInput
              style={styles.input}
              placeholder="YY"
              onChangeText={setExpYear}
              value={expYear}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>CVC</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter CVC"
            onChangeText={setCVC}
            value={cvc}
            keyboardType="numeric"
          />
        </View>
        
        
      </View>
      <TouchableOpacity style={styles.button} onPress={handleProcessPayment}>
        <Text style={styles.buttonText}>PAY NOW</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0575e6',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreditDebit;
