import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity , TouchableRipple } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Menu  from '../screens/Menu';
import COLORS from '../consts/color';


const Setting = () => {
    const navigation = useNavigation();
  return (
    <View>
        {/* <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
        <Text
        style={{
            fontSize:20,
            alignSelf:'center'
        }}
        >About Us</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
          <View style={styles.menuItem}>
            <Icon name="information" color="#164e63" size={26}/>
            <Text style={styles.menuItemText}>About Us</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.bottom}>
          <Menu />
          </View>
    </View>
  )
}



const styles = StyleSheet.create({

  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 26,
  },

  bottom:{
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
    paddingTop: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 650,
    
  },
})

export default Setting;