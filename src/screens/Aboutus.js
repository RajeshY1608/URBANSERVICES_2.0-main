import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking , Image } from 'react-native';
import { FontAwesome , AntDesign } from '@expo/vector-icons';

const AboutUs = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:tejashprajapati0934@gmail.com');
  };

  const handlePress = () => {
    Linking.openURL('mailto:hhenisathaliya@gmail.com');
  };

  const handleWebsitePress = () => {
    Linking.openURL('mailto:rajeshyadav162008@gmail.com');
  };

  const handleFacebookPress = () => {
    Linking.openURL('https://www.facebook.com/yourcompany');
  };

  const handleTwitterPress = () => {
    Linking.openURL('https://www.twitter.com/yourcompany');
  };

  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/yourcompany');
  };
  const handlegithubPress = () => {
    Linking.openURL('https://www.instagram.com/yourcompany');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profilepicture}>
      <Image
        source={require('../../assets/Images/tejash.png')}
        style={styles.photo}
      />
       <Image
        source={require('../../assets/Images/hetal.png')}
        style={styles.photo}
      />

      <Image
        source={require('../../assets/Images/rajesh.png')}
        style={styles.photo}
      />

      </View>
      <View style={styles.name}>
        <Text style={{fontWeight: 'bold'}}>TEJASH</Text>
        <Text style={{fontWeight: 'bold'}}>HETAL</Text>
        <Text style={{fontWeight: 'bold'}}>RAJESH</Text>
      
      </View>
      <Text style={styles.heading}>About Us</Text>
      <Text style={styles.text}>
        We are a team of developers passionate about creating amazing apps for our clients.
      </Text>
      <Text style={styles.text}>
        Our goal is to make our clients' ideas come to life and exceed their expectations.
      </Text>
      <Text style={styles.text}>
        Thank you for choosing us to bring your app to the next level!
      </Text>
      <View style={styles.contactContainer}>
        <Text style={styles.contactHeading}>Contact Us</Text>
        <TouchableOpacity onPress={handleEmailPress}>
          <Text style={styles.contactText}>
            <FontAwesome name="envelope" size={18} color="#555" /> tejashprajapati0934@gmail.com
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}>
          <Text style={{
            fontSize: 18,
            marginBottom: 10,
            color: '#555',
            marginRight:37
          }}>
            <FontAwesome name="envelope" size={18} color="#555" /> hhenisathaliya@gmail.com
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleWebsitePress}>
          <Text style={styles.contactText}>
          <FontAwesome name="envelope" size={18} color="#555" /> rajeshyadav162008@gmail.com
          </Text>
        </TouchableOpacity>
        <View style={styles.socialContainer}>
          <Text style={styles.contactHeading}>Follow Us :</Text>
          <TouchableOpacity onPress={handleFacebookPress}>
            <FontAwesome name="facebook-square" size={30} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleTwitterPress}>
            <FontAwesome name="twitter-square" size={30}color="#1da1f2" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleInstagramPress}>
            <FontAwesome name="instagram" size={30} color="#c13584" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlegithubPress}>
          <AntDesign name="github" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.copyRight}>© UrbanService 2023. All rights reserved.</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    color: '#555',
  },
  contactContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  contactHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft:-30,
    color: '#333',
  },
  contactText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    width: '60%',
  },
  profilepicture: {
    flexDirection: 'row',
    marginTop: 20,
    marginRight:10,
    justifyContent: 'space-around',
    width: '80%',
  },
  name: {
    flexDirection: 'row',
    marginBottom: 10,
    
    //marginRight:10,
    justifyContent: 'space-around',
    width: '80%',
  },
  copyRight: {
    fontSize: 16,
    marginTop: 20,
    color: '#aaa',
  },
  photo: {
    width: 85,
    height: 85,
    borderRadius: 100,
    marginBottom: 10,
  },
  
});


export default AboutUs;
