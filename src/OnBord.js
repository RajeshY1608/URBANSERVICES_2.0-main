import { ImageBackground, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import COLORS from './consts/color'

import { useNavigation } from '@react-navigation/native'

const OnBord = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
   
    <StatusBar translucent   />
      <ImageBackground
        style={{flex: 1, }}
        source={require('../assets/on.jpg')}   blurRadius={5}>
          <View style={styles.details}>
            <Text style={{color: COLORS.black, fontSize: 50, fontWeight:'bold'}}>The</Text>
            <Text style={{color: COLORS.black, fontSize: 40, fontWeight:'bold',lineHeight: 40,}}>all-new</Text>
            <Text style={{color: COLORS.primary, fontSize: 20, lineHeight: 25, marginTop: 15, fontWeight:'bold', textShadowColor: 'red' }}>Welcome to the Urbanservices! Thanks for choosing us to be a part of your home</Text>
            {/* <TouchableOpacity  
              activeOpacity={0.8}
            onPress={() => navigation.navigate('HomeScreen')}>
            <View style={styles.btn}>
              <Text style={{fontWeight:'bold'}}>Get Started</Text>
            </View>
            </TouchableOpacity> */}
            <TouchableOpacity  
              activeOpacity={0.8}
            onPress={() => navigation.navigate('Login')}>
            <View style={styles.btn}>
              <Text style={{fontWeight:'bold' , fontSize:18}}>Login</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity  
              activeOpacity={0.8}
            onPress={() => navigation.navigate('HomeScreen')}>
            <View style={styles.btn}>
              <Text style={{fontWeight:'bold'}}>Home</Text>
            </View>
            </TouchableOpacity>
          </View>
      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  details:{
    height: '50%',
    bottom: 10,
    position: 'absolute',
    paddingHorizontal: 50,
  },
  btn:{
    height: 50,
    width: 120,
    backgroundColor: "#fff",
    marginTop: 20,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default OnBord