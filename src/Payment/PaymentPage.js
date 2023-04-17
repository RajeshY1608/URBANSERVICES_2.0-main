
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity , Linking } from 'react-native';
import COLORS from '../consts/color';

const PaymentPage = ({ navigation }) => {
  const handleCardPayment = () => {
    navigation.navigate('CreditDebit');
  };

  const handleUpiPayment = () => {
    navigation.navigate('Upi');
  };

  const handleNetbankingPayment = () => {
    navigation.navigate('Bankaccount');
  };
  const handlePress = () => {
    Linking.openURL('https://496gf0lz.r.ap-south-1.awstrack.me/L0/https:%2F%2Frzp.io%2Fi%2FlPa1xxj/1/010901874575d200-19dfbdd7-6b7b-4265-8bdd-8c1643944a01-000000/hGBHmlXDDyzRvlT06u3jLvQyY6g=96');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source= {require("../../assets/payment.png")} />
        <Text style={styles.title}>Choose Payment Option To Continue</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.paymentButton} onPress={handleCardPayment}>
          <View style={styles.paymentButtonIconContainer}>
            <Image style={styles.paymentButtonIcon} source= {require("../../assets/card.png")} />
          </View>
          <Text style={styles.paymentButtonText}>Debit/Credit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentButton} onPress={handleUpiPayment}>
          <View style={styles.paymentButtonIconContainer}>
            <Image style={styles.paymentButtonIcon} source= {require("../../assets/upi.png")} />
          </View>
          <Text style={styles.paymentButtonText}>UPI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentButton} onPress={handleNetbankingPayment}>
          <View style={styles.paymentButtonIconContainer}>
            <Image style={styles.paymentButtonIcon} source= {require("../../assets/net.png")} />
          </View>
          <Text style={styles.paymentButtonText}>Netbanking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreOptionsButton}>
          <Text style={styles.orText}>OR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentButton} onPress={handleNetbankingPayment}>
          <View style={styles.paymentButtonIconContainer}>
            <Image style={styles.paymentButtonIcon} source= {require("../../assets/payondel.png")} />
          </View>
          <Text style={styles.paymentButtonText}>Pay On Service</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.moreOptionsButton} onPress={handlePress}>
          <Text style={styles.moreOptionsButtonText}>More payment options</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  paymentButtonIconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  paymentButtonIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  paymentButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 20,
  },
  moreOptionsButton: {
    paddingVertical: 10,
  },
  moreOptionsButtonText: {
    fontSize: 16,
    color: '#81878C',
    textDecorationLine: 'underline',
  },
  orText: {
    fontSize: 16,
    color: COLORS.dark,
  },
    
  
});



export default PaymentPage;
