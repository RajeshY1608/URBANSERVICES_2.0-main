import React, { } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Image , StyleSheet,Dimensions  } from 'react-native';
import { COLOURS, Items } from '../AllServices/database/database'
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import COLORS from "../../src/consts/color"
import Menu from '../screens/Menu';



const AllServices = () => {
  const navigation = useNavigation();
 
  
    return (
    <View>
      <StatusBar backgroundColor={COLORS.primary} barstyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 85}}>
        
        
        <View 
          style={{
          padding: 16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <View 
          style={{
            flexDirection: 'row',
            alignItems: 'center',

          }}>
            <Text 
              style={{
              fontSize: 18,
              color: COLOURS.black,
              fontWeight: '500',
              letterSpacing: 1,
            }}>
               Salon & Spa
              </Text>
           
          </View>
          <Text 
          style={{
            fontSize:14,
            color: COLOURS.blue,
            fontWeight:'400',

          }}>
            See All</Text>
            
        </View>
       
                <View>

               
              <ScrollView horizontal={true}>
              <View style={styles.cardContainer}>
              <TouchableOpacity 
              onPress={()=> navigation.navigate("WomanHairCut")}
                style={{
                  width: '100%',   
              }}
              > 
              <Image
              source= {require("../AllServices/database/images/products/woman.jpg")}
              style={styles.imageStyle}/>
              </TouchableOpacity>
               <Text
              style={{
                fontSize: 18,
                color: COLOURS.black,
                fontWeight: '600',
                marginBottom:2,
                marginLeft: 25,
                fontWeight:'bold',
              }}
              >Salon For Women
              </Text>
              </View>

              <View style={styles.cardContainer}>
              <TouchableOpacity 
              onPress={()=> navigation.navigate("Mansalon")}
                style={{
                  width: '100%',
                        
              }}
              > 
              <Image
              source= {require("../AllServices/database/images/products/man.jpg")}
              style={styles.imageStyle}/>
              </TouchableOpacity>
               <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '600',
                marginBottom:2,
                marginLeft: 10,
              }}
              >Salon For Man
              </Text>
              
              
              </View>
              <View style={styles.cardContainer}>
              <TouchableOpacity 
              onPress={()=> navigation.navigate("Manspa")}
                style={{
                  width: '100%',
                        
              }}
              > 
              <Image
              source= {require("../AllServices/database/images/products/manspa.jpg")}
              style={styles.imageStyle}/>
              </TouchableOpacity>
               <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '600',
                marginBottom:2,
                marginLeft: 10,
              }}
              >Man Spa
              </Text>
              
             
              </View>
              <View style={styles.cardContainer}>
              <TouchableOpacity 
              onPress={()=> navigation.navigate("Womanspa")}
                style={{
                  width: '100%',
                        
              }}
              > 
              <Image
              source= {require("../AllServices/database/images/products/parlour.jpg")}
              style={styles.imageStyle}/>
              </TouchableOpacity>
               <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '600',
                marginBottom:2,
                marginLeft: 10,
              }}
              >Woman Spa
              </Text>
             
             
              </View>
              </ScrollView>
              
              
              </View>
              
            
              <View 
          style={{
          padding: 16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <View 
          style={{
            flexDirection: 'row',
            alignItems: 'center',

          }}>
            <Text 
              style={{
              fontSize: 18,
              color: COLOURS.black,
              fontWeight: '500',
              letterSpacing: 1,
            }}>
               Cleaning Services
              </Text>
              
           
          </View>
          <Text 
          style={{
            fontSize:14,
            color: COLOURS.blue,
            fontWeight:'400',

          }}>
            See All</Text>
            
        </View>
        <View>
        <ScrollView horizontal={true}>
              <View style={styles.cardContainer}>
              <TouchableOpacity 
              onPress={()=> navigation.navigate("Dis")}
                style={{
                  width: '100%',
                        
              }}
              > 
              <Image
              source= {require("../AllServices/database/images/products/disinfections.jpg")}
              style={styles.imageStyle}/>
              </TouchableOpacity>
               <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '600',
                marginBottom:2,
                marginLeft: 10,
              }}
              >Disinfection Service
              </Text>
             
              
              </View>
              <View style={styles.cardContainer}>
              <TouchableOpacity 
              onPress={()=> navigation.navigate("Fullhomwclean")}
                style={{
                  width: '100%',
                        
              }}
              > 
              <Image
              source= {require("../AllServices/database/images/products/home.jpg")}
              style={styles.imageStyle}/>
              </TouchableOpacity>
               <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '600',
                marginBottom:2,
                marginLeft: 10,
              }}
              >Full Home Cleaning
              </Text>
             
              
              </View>
              <View style={styles.cardContainer}>
              <TouchableOpacity 
              onPress={()=> navigation.navigate("Bathroomclean")}
                style={{
                  width: '100%',
                        
              }}
              > 
              <Image
              source= {require("../AllServices/database/images/products/kitchen.jpg")}
              style={styles.imageStyle}/>
              </TouchableOpacity>
               <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '600',
                marginBottom:2,
                marginLeft: 10,
              }}
              >Bathroom & kitchen Cleaning
              </Text>
              
              
              </View>
              {/* <View>
              <TouchableOpacity 
              onPress={()=> navigation.navigate("bathroomclean")}
                style={{
                  width: '100%',
                        
              }}
              > 
              <Image
              source= {require("../AllServices/database/images/products/bathroom.jpg")}
              style={{
                
                width: 160,
                height: 120,
                marginLeft: 10,
                borderRadius: 10,
                resizeMode: 'contain',
              }}/>
              </TouchableOpacity>
               <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '600',
                marginBottom:2,
                marginLeft: 10,
              }}
              >bathroom Cleaning
              </Text>
              
              
              </View> */}
              </ScrollView>
        </View>
        <View 
          style={{
          padding: 16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <View 
          style={{
            flexDirection: 'row',
            alignItems: 'center',

          }}>
            <Text 
              style={{
              fontSize: 18,
              color: COLOURS.black,
              fontWeight: '500',
              letterSpacing: 1,
            }}>
               Electricians/Appliance Repair
              </Text>
           
          </View>
          <Text 
          style={{
            fontSize:14,
            color: COLOURS.blue,
            fontWeight:'400',

          }}>
            See All</Text>
            
        </View>
        <View>
        <ScrollView horizontal={true}>
              <View style={styles.cardContainer}>
              <TouchableOpacity 
              onPress={()=> navigation.navigate("Ac")}
                style={{
                  width: '100%',
                        
              }}
              > 
              <Image
              source= {require("../AllServices/database/images/products/ac.jpg")}
              style={styles.imageStyle}/>
              </TouchableOpacity>
               <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '600',
                marginBottom:2,
                marginLeft: 10,
              }}
              >AC Repair
              </Text>
             
              
              </View>
              <View style={styles.cardContainer}>
              <TouchableOpacity 
              onPress={()=> navigation.navigate("Tv")}
                style={{
                  width: '100%',
                        
              }}
              > 
              <Image
              source= {require("../AllServices/database/images/products/tv.jpg")}
              style={styles.imageStyle}/>
              </TouchableOpacity>
               <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '600',
                marginBottom:2,
                marginLeft: 10,
              }}
              >TV Repair
              </Text>
             
             
              </View>
              <View style={styles.cardContainer}>
              <TouchableOpacity 
              onPress={()=> navigation.navigate("Fridge")}
                style={{
                  width: '100%',
                        
              }}
              > 
              <Image
              source= {require("../AllServices/database/images/products/fridge.jpg")}
              style={styles.imageStyle}/>
              </TouchableOpacity>
               <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '600',
                marginBottom:2,
                marginLeft: 10,
              }}
              >Fridge Repair
              </Text>
              
              
              </View>
              <View style={styles.cardContainer}>
              <TouchableOpacity 
              onPress={()=> navigation.navigate("Serviceinfo")}
                style={{
                  width: '100%',
                        
              }}
              > 
              <Image
              source= {require("../AllServices/database/images/products/wmachine.jpg")}
              style={styles.imageStyle}/>
              </TouchableOpacity>
               <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '600',
                marginBottom:2,
                marginLeft: 10,
              }}
              >Waching Machine Repair
              </Text>
              
              
              </View>
              </ScrollView>
        </View>
        <View 
          style={{
          padding: 16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <View 
          style={{
            flexDirection: 'row',
            alignItems: 'center',

          }}>
            <Text 
              style={{
              fontSize: 18,
              color: COLOURS.black,
              fontWeight: '500',
              letterSpacing: 1,
            }}>
              Plumbers & Carpenters
              </Text>
            
          </View>
          <Text 
          style={{
            fontSize:14,
            color: COLOURS.blue,
            fontWeight:'400',

          }}>
            See All</Text>
            
        </View>
        <View>
        <ScrollView horizontal={true}>
              <View style={styles.cardContainer}>
              <TouchableOpacity 
              onPress={()=> navigation.navigate("Plumber")}
                style={{
                  width: '100%',
                        
              }}
              > 
              <Image
              source= {require("../AllServices/database/images/products/plumber1.jpg")}
              style={styles.imageStyle}/>
              </TouchableOpacity>
               <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '600',
                marginBottom:2,
                marginLeft: 10,
              }}
              >Plumber For Home
              </Text>
              
              
              </View>
              {/* <View style={styles.cardContainer}>
              <TouchableOpacity 
              onPress={()=> navigation.navigate("Plumber")}
                style={{
                  width: '100%',
                        
              }}
              > 
              <Image
              source= {require("../AllServices/database/images/products/housekepping.jpg")}
              style={styles.imageStyle}/>
              </TouchableOpacity>
               <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '600',
                marginBottom:2,
                marginLeft: 10,
              }}
              >Housekepping
              </Text>
              
              
              </View> */}
              <View style={styles.cardContainer}>
              <TouchableOpacity 
              onPress={()=> navigation.navigate("Carpenter")}
                style={{
                  width: '100%',
                        
              }}
              > 
              <Image
              source= {require("../AllServices/database/images/products/carpenter.jpg")}
              style={styles.imageStyle}/>
              </TouchableOpacity>
               <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '600',
                marginBottom:2,
                marginLeft: 10,
              }}
              >Home Carpenters
              </Text>
              
              
              </View>
              <View style={styles.cardContainer}>
              <TouchableOpacity 
              onPress={()=> navigation.navigate("Serviceinfo")}
                style={{
                  width: '100%',
                        
              }}
              > 
              <Image
              source= {require("../AllServices/database/images/products/garden.jpg")}
              style={styles.imageStyle}/>
              </TouchableOpacity>
               <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '600',
                marginBottom:2,
                marginLeft: 10,
              }}
              >Garden Service & Cleaning
              </Text>
              
              <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '400',
                opacity: 0.7,
                marginLeft: 20,
              }}
              >
              </Text>
              </View>
              </ScrollView>
        </View>
        <View>
        
    </View>
     </ScrollView>
     
     <View style={styles.bottom}>
          <Menu />
          </View>
    </View>
    
    
  );
  
};


export default AllServices;

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
  menuContainer:{
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 5 ,
      paddingHorizontal: 15,
  },
  textStyle:{
      textTransform: "uppercase",
      marginBottom: 50,
      fontSize: 11,
  },
  iconStyle:{
      width: "100%",
      height: 30,
      aspectRatio: 1,
  },
  buttonStyle: {
      alignItems: 'center'
  },
  bottom:{
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
    paddingTop: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -80,
    
  },
  cardContainer:{
    width: 200,
    backgroundColor:COLORS.grey,
    height: 140,
    borderRadius: radius,
    marginLeft: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  
  imageStyle:{
    height: 110,
    width: 200,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center',
  },

  
});