import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

function Support({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/help.png')} style={styles.logo} />
        <Text style={styles.title}>Need Help?</Text>
      </View>
      <View style={styles.contactContainer}>
        <Text style={styles.contactTitle}>Contact Us</Text>
        <TouchableOpacity style={styles.contactItem}>
          <Image source={require('../../assets/call.png')} style={styles.contactIcon} />
          <Text style={styles.contactText}>Call Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactItem}>
          <Image source={require('../../assets/email.png')} style={styles.contactIcon} />
          <Text style={styles.contactText}>Email Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactItem}
        onPress={() => navigation.navigate("Chatbot")}
        >
          <Image source={require('../../assets/chat.png')} style={styles.contactIcon} />
          <Text style={styles.contactText}>Chat with Us</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.faqContainer}>
        <Text style={styles.faqTitle}>Frequently Asked Questions</Text>
        <TouchableOpacity style={styles.faqItem}>
          <Text style={styles.faqQuestion}>How do I book a service?</Text>
          <Image source={require('../../assets/Images/rajesh.png')} style={styles.faqIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.faqItem}>
          <Text style={styles.faqQuestion}>What is the cancellation policy?</Text>
          <Image source={require('../../assets/Images/rajesh.png')} style={styles.faqIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.faqItem}>
          <Text style={styles.faqQuestion}>How do I pay for a service?</Text>
          <Image source={require('../../assets/Images/rajesh.png')} style={styles.faqIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.faqItem}>
          <Text style={styles.faqQuestion}>What if I have a complaint?</Text>
          <Image source={require('../../assets/Images/rajesh.png')} style={styles.faqIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f2f2f2',
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
      fontSize: 24,
      fontWeight: 'bold',
      color: '#555',
    },
    contactContainer: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      marginBottom: 20,
    },
    contactTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#555',
      marginBottom: 10,
    },
    contactItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    contactIcon: {
      width: 25,
      height: 25,
      marginRight: 10,
    },
    contactText: {
      fontSize: 16,
      color: '#555',
    },
    faqContainer: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
    },
    faqTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#555',
      marginBottom: 10,
    },
    faqItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingVertical: 10,
    },
    faqQuestion: {
      fontSize: 16,
      color: '#555',
      flex: 1,
    },
    faqIcon: {
      width: 20,
      height: 20,
      tintColor: '#555',
    },
  });

  export default Support;