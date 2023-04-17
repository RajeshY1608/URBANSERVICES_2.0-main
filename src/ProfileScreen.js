import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Share,
  Image,
  RefreshControl,
  ActivityIndicator,
  BackHandler 
} from "react-native";
import { Title, Caption, Text, TouchableRipple } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icons from "react-native-vector-icons/Ionicons";
import Menu from "./screens/Menu";
import COLORS from "./consts/color";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";

// import Share from 'react-native-share';

// import files from '../assets/filesBase64';

const ProfileScreen = ({title}) => {
  // const [userLogin, setUserLogin] = useState({});
  const [userName, setUserName] = useState({});
  const [userEmail, setUserEmail] = useState({});


  
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Call your API or perform any action you want to load the content
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);

    



  const [refreshing, setRefreshing] = React.useState(false);
 
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);



  const getData = async (key) => {
    // get Data from Storage
    try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) {
        console.log(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear(); // clears all data stored in AsyncStorage
      navigation.navigate('Login'); // navigate to the login screen
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData("userName")
      .then((data) => data)
      .then((value) => {
        console.log("Name:  " + value);
        setUserName(value);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getData("userEmail")
      .then((data) => data)
      .then((value) => {
        console.log("Email:  " + value);
        setUserEmail(value);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigation = useNavigation();
  //   const myCustomShare = async() => {
  //     const shareOptions = {
  //       message: 'Order your next meal from FoodFinder App. I\'ve already ordered more than 10 meals on it.',
  //       url: files.appLogo,
  //       // urls: [files.image1, files.image2]
  //     }

  //     try {
  //       const ShareResponse = await Share.open(shareOptions);
  //       console.log(JSON.stringify(ShareResponse));
  //     } catch(error) {
  //       console.log('Error => ', error);
  //     }
  //   };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "https://play.google.com/store/apps/details?id=host.exp.exponent",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  //onPress={() => { navigation.navigate('Login') }}

  const handlePress = () => {
    Alert.alert("Alert", "Do you want to sure LogOut ?", [
      {
        text: "no",
        //onPress: () => console.log('Cancel Pressed'),
        style: "cancel",
      },
      {
        text: "LogOut",
        onPress: () => {
          navigation.navigate("Login");
        },
      },
    ]);
  };

  useEffect(() => {
    const backAction = () => {
      // Block the back button
      return true;
    };

    // Add event listener to handle back button press
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    // Clean up event listener
    return () => backHandler.remove();
  }, []);

  return (
    
    <SafeAreaView style={styles.container}>
      <View style={{
          backgroundColor:"#f5f5fa",
          height:680,
          width:425,
          borderRadius:20,
          //marginTop:10,
          //marginRight:20,
          marginBottom:10
      }}>
       {isLoading ? (
        <ActivityIndicator size="large" color="blue"  />
      ) : (
        <View >
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Image
            source={require("../assets/avatar.png")}
            style={styles.photo}
          />
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              {/* {userLogin.email} */}
            </Title>
            <Caption style={styles.caption}>{userName}</Caption>
            <Caption style={styles.caption}>{userEmail}</Caption>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Editprofile")}
            >
              <Icon
                name="account-edit"
                size={30}
                backgroundColor="#fff"
                color="#000"
                style={styles.econs}
              />
              <Text style={styles.edit}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: "#dddddd",
              borderRightWidth: 1,
            },
          ]}
        >
          <Title>₹2000</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>0</Title>
          <Caption>Orders</Caption>
        </View>
      </View> */}

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => navigation.navigate("WishlistScreen")}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#164e63" size={25} />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate("PaymentHistory")}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#164e63" size={25} />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={onShare}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#164e63" size={25} />
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate("Support")}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#164e63" size={25} />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
          <View style={styles.menuItem}>
            <Icons name="settings-outline" color="#164e63" size={25} />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableOpacity>
        <TouchableRipple onPress={handlePress}>
          <View style={styles.menuItem}>
            <Icon name="logout" color="#164e63" size={25} />
            <Text style={styles.menuItemText}>Logout</Text>
          </View>
        </TouchableRipple>
        {/* <TouchableOpacity
       onPress={() => navigation.navigate("Chatbot")}
      style={styles.button}
    >
      
      <Image
            source={require("../assets/menuicon/chatbot.png")}
            style={styles.photos}
          />
      
    </TouchableOpacity> */}
        
      </View>
      </View>
      )}
      <View style={styles.bottom}>
          <Menu />
        </View>
        </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // button: {
  //   backgroundColor: COLORS.primary,
  //   // paddingVertical: 10,
  //   // paddingHorizontal: 20,
  //   // borderRadius: 50,
  //   // marginTop: 10,
  //   // marginHorizontal: 130,
  //   borderRadius: 50,
  //   width: 90,
  //   height: 90,
  //   marginLeft: 270
       
  // },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    
    
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  titles: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign:"center",
    borderRadius: 10,
    marginTop: 25
    
  },
  caption: {
    fontSize: 15,
    lineHeight: 14,
    fontWeight: "800",
   // marginLeft: 30
  },
  edit: {
    fontSize: 13,
    lineHeight: 22,
    fontWeight: "500",
    marginLeft: 150,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  bottom: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
    paddingTop: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginBottom: -110,
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0, 
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
    borderTopWidth: 2,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 26,
  },
  econs: {
    marginLeft: 150,
    marginTop: 20,
  },

  photo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 20,
  },
  photos: {
    width: 60,
    height: 60,
    marginLeft: 290,
    marginTop:0,
  },
});
