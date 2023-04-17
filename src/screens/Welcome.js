import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import pattern from '../../assets/pt.jpg'
import welcomelogo from '../../assets/PM.png'
import { button1 } from '../common/button'
import { button2 } from '../common/button'

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={pattern} />
      <View style={styles.container1}>
      {/*<Image style={styles.logo} source={welcomelogo} />*/}
      <Text style={button1}>Login</Text>
      <Text style={button2}>SignUp</Text>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({

    container:{
        width: "100%",
        height:"100%",
    },
    patternbg:{
        position: 'absolute',
        top: 0,
        width:'100%',
        height: '100%',
    },
    head:{
      fontSize: 30,
      color: '#fff'
    },
    container1:{
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'100%',
    },
    logo:{
      width: '70%',
      height: '70%',
    }
})