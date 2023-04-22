import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, ImageBackground, FlatList , Linking, RefreshControl} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import SearchFilter from './components/SearchFilter'
import { TextInput } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import serviecapi from './consts/Serviecapi'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import COLORS from './consts/color'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Menu from './screens/Menu'
import offers from './screens/offers'
import Login from './screens/Login'
import Icon from "@expo/vector-icons/Entypo"
import { FontAwesome } from '@expo/vector-icons';






const HomeScreen = ({navigation}) => {
  

  const [refreshing, setRefreshing] = React.useState(false);
 
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  
  const ListServices = () => {
   

    return ( 
    <View style={style.servicesIcon}>
        <TouchableOpacity
            style={style.buttonStyle}
                onPress={() => navigation.navigate("ManHairCut")}>
                <Image 
                style={style.iconStyle}
                     source={require("../assets/haircut.png")}
                 />
                 <Text style={{fontSize: 15, alignItems:'center',marginLeft: 10, marginTop: 10}}>Salon</Text>
           </TouchableOpacity>

           <TouchableOpacity
            style={style.buttonStyle}
                onPress={() => navigation.navigate("Spa")}>
                <Image 
                style={style.iconStyle}
                     source={require("../assets/spa.png")}
                 />
                 <Text style={{fontSize: 15, alignItems:'center' , marginLeft: 10,marginTop: 10}}>Spa</Text>
           </TouchableOpacity>

           <TouchableOpacity
            style={style.buttonStyle}
                onPress={() => navigation.navigate("Electrician")}>
                <Image 
                style={style.iconStyle}
                     source={require("../assets/technician.png")}
                 />
                 <Text style={{fontSize: 15, alignItems:'center' , marginLeft: -10, marginTop: 10}}>Electrician</Text>
           </TouchableOpacity>

           <TouchableOpacity
            style={{alignItems: 'center'}}
                onPress={() => navigation.navigate("AllServices")}>
                <Image 
                style={style.iconStyle}
                     source={require("../assets/all.png")}
                 />
                 <Text style={{fontSize: 15, alignItems:'center' ,textAlign:'center', marginTop: 10 }}>All Services</Text>
           </TouchableOpacity>

           

          
    </View>
    )
  };

  const Package = ({offers}) =>{

   

    return <ImageBackground style={style.package} source={offers.image}></ImageBackground>
  } 
  
  
  const handlePress = () => {
    Linking.openURL('https://youtu.be/3dlb5V4QmeM');
  };

  const handleFacebookPress = () => {
    Linking.openURL('https://www.facebook.com/yourcompany');
  };

  const handleTwitterPress = () => {
    Linking.openURL('https://www.twitter.com/yourcompany');
  };

  const handleInstagramPress = () => {
    Linking.openURL('https://instagram.com/rajesh_.1608?igshid=ZDdkNTZiNTM=');
  };

  return <SafeAreaView style={{flex: 1, backgroundColor: '#fff',}}>
          <StatusBar translucent={false} backgroundColor={COLORS.primary} />
          <View style={style.header}>
          <TouchableOpacity style={{alignItems:'flex-end'}}
          // onPress={() => navigation.navigate("Login")}
          >
          <Image
                     source={require("../assets/menuicon/bell.png")}
                 />
          </TouchableOpacity>
          </View>
          
              <View style={{backgroundColor: COLORS.primary,height: 120, paddingHorizontal: 30,}}>
              <View>
              <Text style={style.headerTitle}>Welcome To</Text>
                  <Text style={{fontStyle:'italic', color: COLORS.white, fontSize: 20, fontWeight: 'bold'}}>Urbanservices</Text>
                  <TouchableOpacity >
                  <View style={style.inputContainer}>
                  <TextInput placeholder='Search Services' style={{color: COLORS.primary}} 
                    onPressIn={() => navigation.navigate("SearchFilter")}
                  />
                  </View>
                  </TouchableOpacity>
              </View>
              </View>
              <ListServices />
              <ScrollView showsVerticalScrollIndicator={false}
               refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }>
              <View>
              <Text style={style.secionTitle}>Special Package & Offers</Text>
              <FlatList
              contentContainerStyle={{paddingLeft: 15,paddingBottom: 10 }}
              showsHorizontalScrollIndicator={false}
              horizontal
               data={offers} renderItem={({item}) => <Package offers={item} /> }/>
              </View>
                  
              
            

  
         
          <View style={{
                       alignItems:"center",
                       marginHorizontal:20,
                       flexDirection:"row",
                       marginTop:20
                   }}>
                       <View style={{
                           width:"50%"
                       }}>
                           <Text style={{
                               fontSize:22,
                               fontWeight:"bold"
                           }}>Popular Services</Text>
                       </View>
                       <View style={{
                           width:"50%",
                           alignItems:"flex-end"
                       }}>
                           <Icon
                            name="dots-three-horizontal"
                            size={25}
                            color="#848385"
                           />
                       </View>
                    </View>
            <ScrollView horizontal={true}>
              <View style={{
                  flexDirection:"row",
                  marginHorizontal:15,
                  marginTop:10,
                }}>
           <TouchableOpacity
             onPress={()=> navigation.navigate("Spa")}
            style={{
                backgroundColor:"#f5f5fa",
                height:240,
                width:180,
                borderRadius:20,
                marginTop:10,
                marginRight:10
            }}
          >
              <View style={{
                  flexDirection:"row",
                  alignItems:"center",
                  alignSelf:"center",
                  marginTop:15
              }}>
                  <Image
                    source={require('../assets/Images/off.png')}
                    style={{height:25,width:25}}
                  />
                  <Text style={{
                      paddingHorizontal:10,
                      fontWeight:"bold",
                      fontSize:16
                  }}>
                      50% OFF
                  </Text>
              </View>
              <Image
                source={require('../assets/Images/salon.png')}
                style={{
                  height:116,
                  alignSelf:"center",
                  width:130,
                  marginTop:10,
                  marginBottom:10
                }}
              />
              <Text style={{
                  fontSize:18,
                  fontWeight:"bold",
                  paddingHorizontal:10,
                  paddingVertical:5,
                  alignSelf:"center",
              }}>
                  Salon & Spa
              </Text>
              <Text style={{
                  fontSize:12.5,
                  fontWeight:"bold",
                  paddingHorizontal:10,
                  color:"#848385",
                  alignSelf:"center",
              }}>
                  Get 50% Off On Your First Order
              </Text>
          </TouchableOpacity>
          </View>
         
          
           <View style={{
                       flexDirection:"row",
                       marginHorizontal:10,
                       marginTop:10,
                   }}>
           <TouchableOpacity
            //onPress={this.props.onPress}
            style={{
                backgroundColor:"#f5f5fa",
                height:240,
                width:180,
                borderRadius:20,
                marginTop:10,
                marginRight:10
            }}
          >
              <View style={{
                  flexDirection:"row",
                  alignItems:"center",
                  alignSelf:"center",
                  marginTop:15
              }}>
                  <Image
                    source={require('../assets/Images/off.png')}
                    style={{height:25,width:25}}
                  />
                  <Text style={{
                      paddingHorizontal:10,
                      fontWeight:"bold",
                      fontSize:16
                  }}>
                      50% OFF
                  </Text>
              </View>
              <Image
                source={require('../assets/Images/clean.png')}
                style={{
                  height:125,
                  alignSelf:"center",
                  width:110,
                  marginTop:10,
                  marginBottom:0
                }}
              />
              <Text style={{
                  fontSize:18,
                  fontWeight:"bold",
                  paddingHorizontal:10,
                  paddingVertical:5,
                  alignSelf:"center",
              }}>
                  Cleaning Services
              </Text>
              <Text style={{
                  fontSize:12.5,
                  fontWeight:"bold",
                  paddingHorizontal:10,
                  color:"#848385",
                  alignSelf:"center",
              }}>
                  Get 50% Off On Your First Order
              </Text>
          </TouchableOpacity>
          </View>
          </ScrollView> 
          <ScrollView horizontal={true}
          
          >
              <View style={{
                  flexDirection:"row",
                  marginHorizontal:15,
                  marginTop:10,
                }}>
           <TouchableOpacity
            //onPress={this.props.onPress}
            style={{
                backgroundColor:"#f5f5fa",
                height:240,
                width:180,
                borderRadius:20,
                marginTop:10,
                marginRight:10
            }}
          >
              <View style={{
                  flexDirection:"row",
                  alignItems:"center",
                  alignSelf:"center",
                  marginTop:15
              }}>
                  <Image
                    source={require('../assets/Images/off.png')}
                    style={{height:25,width:25}}
                  />
                  <Text style={{
                      paddingHorizontal:10,
                      fontWeight:"bold",
                      fontSize:16
                  }}>
                      50% OFF
                  </Text>
              </View>
              <Image
                source={require('../assets/Images/Elec.png')}
                style={{
                  height:116,
                  alignSelf:"center",
                  width:130,
                  marginTop:10,
                  marginBottom:10
                }}
              />
              <Text style={{
                  fontSize:18,
                  fontWeight:"bold",
                  paddingHorizontal:10,
                  paddingVertical:5,
                  alignSelf:"center",
              }}>
                  Electrician
              </Text>
              <Text style={{
                  fontSize:12.5,
                  fontWeight:"bold",
                  paddingHorizontal:10,
                  color:"#848385",
                  alignSelf:"center",
              }}>
                  Get 50% Off On Your First Order
              </Text>
          </TouchableOpacity>
          </View>
         
          
           <View style={{
                       flexDirection:"row",
                       marginHorizontal:10,
                       marginTop:10,
                   }}>
           <TouchableOpacity
            //onPress={this.props.onPress}
            style={{
                backgroundColor:"#f5f5fa",
                height:240,
                width:180,
                borderRadius:20,
                marginTop:10,
                marginRight:10
            }}
          >
              <View style={{
                  flexDirection:"row",
                  alignItems:"center",
                  alignSelf:"center",
                  marginTop:15
              }}>
                  <Image
                    source={require('../assets/Images/off.png')}
                    style={{height:25,width:25}}
                  />
                  <Text style={{
                      paddingHorizontal:10,
                      fontWeight:"bold",
                      fontSize:16
                  }}>
                      50% OFF
                  </Text>
              </View>
              <Image
                source={require('../assets/Images/plumber.png')}
                style={{
                  height:130,
                  alignSelf:"center",
                  width:130,
                  marginTop:10,
                  marginBottom:-3
                }}
              />
              <Text style={{
                  fontSize:18,
                  fontWeight:"bold",
                  paddingHorizontal:10,
                  paddingVertical:5,
                  alignSelf:"center",
              }}>
                  Plumber
              </Text>
              <Text style={{
                  fontSize:12.5,
                  fontWeight:"bold",
                  paddingHorizontal:10,
                  color:"#848385",
                  alignSelf:"center",
              }}>
                  Get 50% Off On Your First Order
              </Text>
          </TouchableOpacity>
          </View>
          </ScrollView> 
          <View style={{
                       alignItems:"center",
                       marginHorizontal:20,
                       flexDirection:"row",
                       marginTop:20
                   }}>
                       <View style={{
                           width:"50%"
                       }}>
                           <Text style={{
                               fontSize:22,
                               fontWeight:"bold"
                           }}>Review Videos</Text>
                       </View>
                       <View style={{
                           width:"50%",
                           alignItems:"flex-end"
                       }}>
                           <Icon
                            name="dots-three-horizontal"
                            size={25}
                            color="#848385"
                           />
                       </View>
                    </View>
          <TouchableOpacity 
          
            onPress={handlePress}>
            
          <Image
                source={require('../assets/Images/thumb.png')}
                style={{
                  height:200,
                  alignSelf:"center",
                  width:380,
                  marginTop:20,
                  marginBottom:10,
                  marginLeft: 10,
                  borderRadius: 20,
                  //resizeMode: 'contain',
                }}
                
              />
            </TouchableOpacity>
            <View style={{
                       alignItems:"center",
                       marginHorizontal:20,
                       flexDirection:"row",
                       marginTop:20
                   }}>
                       <View style={{
                           width:"50%"
                       }}>
                           <Text style={{
                               fontSize:22,
                               fontWeight:"bold"
                           }}>Customer Reviews</Text>
                       </View>
                       <View style={{
                           width:"50%",
                           alignItems:"flex-end"
                       }}>
                           <Icon
                            name="dots-three-horizontal"
                            size={25}
                            color="#848385"
                           />
                       </View>
                    </View>

                    <ScrollView horizontal={true}>
                    <View 
                    style={{
                      backgroundColor:"#f5f5fa",
                      height:160,
                      width:260,
                      borderRadius:12,
                      marginTop:10,
                      marginRight:10,
                      //flexDirection:"row",
                       marginHorizontal:20,
                       marginTop:15,
                  }}
                    >
                      <Text style={{
                               fontSize:15,
                               marginTop:10,
                               alignSelf:"center",
                               fontWeight:"bold"
                           }}>
                        Home Cleaning
                      </Text >
                      <Text style={{
                               marginTop:10,
                               marginBottom:10,
                               marginHorizontal:10,
                               fontSize:14,
                           }}>
                        I am impressed with the platform's easy-to-use interface and the professionalism of the service providers.
                      </Text>
                      <View style={{
                  flexDirection:"row",
                  alignItems:"center",
                  marginHorizontal:10,
                  marginTop:-5
              }}>
                  <Image
                    source={require('../assets/Images/5star.png')}
                    style={{height:25,width:130}}
                  />
                  
              </View>
                      <Text style={{
                               fontSize:16,
                               marginLeft:10,
                               fontWeight:"900"
                           }}>
                        - RAJESH
                      </Text >
                    </View>

                    <View 
                    style={{
                      backgroundColor:"#f5f5fa",
                      height:160,
                      width:260,
                      borderRadius:12,
                      marginTop:10,
                      marginRight:10,
                      //flexDirection:"row",
                       marginHorizontal:10,
                       marginTop:15,
                  }}
                    >
                      <Text style={{
                               fontSize:15,
                               marginTop:10,
                               alignSelf:"center",
                               fontWeight:"bold"
                           }}>
                        Home Cleaning
                      </Text >
                      <Text style={{
                               marginTop:10,
                               marginBottom:10,
                               marginHorizontal:10,
                               fontSize:14,
                           }}>
                        I have used UrbanClap for a variety of services, including home cleaning and beauty treatments, and have always been satisfied with the quality of work.
                      </Text>
                      <View style={{
                  flexDirection:"row",
                  alignItems:"center",
                  marginHorizontal:10,
                  marginTop:-5
              }}>
                  <Image
                    source={require('../assets/Images/4.5star.png')}
                    style={{height:25,width:130}}
                  />
                  
              </View>
                      <Text style={{
                               fontSize:16,
                               marginLeft:10,
                               fontWeight:"900"
                           }}>
                        - HETAL
                      </Text >
                    </View>
                    <View 
                    style={{
                      backgroundColor:"#f5f5fa",
                      height:160,
                      width:260,
                      borderRadius:12,
                      marginTop:10,
                      marginRight:10,
                      //flexDirection:"row",
                       marginHorizontal:10,
                       marginTop:15,
                  }}
                    >
                      <Text style={{
                               fontSize:15,
                               marginTop:10,
                               alignSelf:"center",
                               fontWeight:"bold"
                           }}>
                        Home Cleaning
                      </Text >
                      <Text style={{
                               marginTop:10,
                               marginBottom:10,
                               marginHorizontal:10,
                               fontSize:14,
                           }}>
                         I am impressed with the platform's easy-to-use interface and the professionalism of the service providers.
                      </Text>
                      <View style={{
                  flexDirection:"row",
                  alignItems:"center",
                  marginHorizontal:10,
                  marginTop:-5
              }}>
                  <Image
                    source={require('../assets/Images/4star.png')}
                    style={{height:25,width:130}}
                  />
                  
              </View>
                      <Text style={{
                               fontSize:16,
                               marginLeft:10,
                               fontWeight:"900"
                           }}>
                        - TEJASH
                      </Text >
                    </View>
                    <View 
                    style={{
                      backgroundColor:"#f5f5fa",
                      height:160,
                      width:260,
                      borderRadius:12,
                      marginTop:10,
                      marginRight:10,
                      //flexDirection:"row",
                       marginHorizontal:10,
                       marginTop:15,
                  }}
                    >
                      <Text style={{
                               fontSize:15,
                               marginTop:10,
                               alignSelf:"center",
                               fontWeight:"bold"
                           }}>
                        Home Cleaning
                      </Text >
                      <Text style={{
                               marginTop:10,
                               marginBottom:10,
                               marginHorizontal:10,
                               fontSize:14,
                           }}>
                        I have used UrbanClap for a variety of services, including home cleaning and beauty treatments, and have always been satisfied with the quality of work.
                      </Text>
                      <View style={{
                  flexDirection:"row",
                  alignItems:"center",
                  marginHorizontal:10,
                  marginTop:-5
              }}>
                  <Image
                    source={require('../assets/Images/5star.png')}
                    style={{height:25,width:130}}
                  />
                  
              </View>
                      <Text style={{
                               fontSize:16,
                               marginLeft:10,
                               fontWeight:"900"
                           }}>
                        - RAJESH
                      </Text >
                    </View>
                    </ScrollView>
                    <Text style={style.copyRight}>© Urbanservice 2023. All rights reserved.</Text>
                    <View style={style.socialContainer}>
          <Text style={style.contactHeading}>Follow Us</Text>
          <TouchableOpacity onPress={handleFacebookPress}>
            <FontAwesome name="facebook-square" size={30} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleTwitterPress}>
            <FontAwesome name="twitter-square" size={30} color="#1da1f2" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleInstagramPress}>
            <FontAwesome name="instagram" size={30} color="#c13584" />
          </TouchableOpacity>
        </View>

          </ScrollView>  
    
          <View style={style.bottom}>
          <Menu />
          </View>
         
  </SafeAreaView>
}

const style = StyleSheet.create({
  header:{
    paddingVertical: 20,
    paddingHorizontal: 20,

    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
  },
  bottom:{
    paddingVertical: 0,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
    paddingTop: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    
  },
  headerTitle:{
    color: COLORS.white,
    fontWeight: 'bold',
    fontStyle:'italic',
    fontSize: 30,
  },
  inputContainer:{
    height: 60,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: 'absolute',
    top: 25,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
  },
  servicesIcon:{
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: 'space-between',
    // borderBottomWidth: 1,
    
    
  },
  iconStyle:{
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
  secionTitle:{
    marginHorizontal:20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  package: {
    width: 380,
    height: 200,
    marginRight: 20,
    borderRadius:10,
    overflow: "hidden",
    padding: 10
  },

  copyRight: {
    fontSize: 16,
    marginTop: 20,
    marginBottom:10,
    alignSelf:'center',
    color: '#aaa',
  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginLeft:85,
  },

  contactHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    marginLeft:10,
  },
  
 
});

export default HomeScreen;