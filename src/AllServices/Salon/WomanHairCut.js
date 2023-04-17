import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  Share,
  Alert,
  Touchable,
  Picker,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/color";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { addToWishlist } from "../../redux/actions/action";
import IPPORT from '../../IPport';


// import { useDispatch } from "react-redux";

const Electrician = ({ navigation, params }) => {
  const [data, setData] = useState([]);
  const [postdata, setPostdata] = useState([""]);





  

  const [booking , setBooking] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  console.log("data avi gya?", wishlist);

  // const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://${IPPORT}:4000/api/womansalon`
      );
      setData(response.data);
      // console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const bookingData = async (item) => {
    try {
      const response = await axios.post(
        `http://${IPPORT}:4000/api/booking`,
        item
      );
      Alert.alert(
        "Added to Bokking"
      )
      // setPostdata(item);
      console.log(item);
    } catch (error) {
      console.error(error);
    }
    // {
    //   wishlist.map((item) => (
    //     <View>
    //       <Text>{item.rating}</Text>
    //     </View>
    //   ));
    // }
  };

  const postData = async (item) => {
    try {
      const response = await axios.post(
        `http://${IPPORT}:4000/api/wishlist`,
        item
      );
      Alert.alert(
        "Added to Wishlist"
      )
      // setPostdata(item);
      console.log(item);
    } catch (error) {
      console.error(error);
    }
    // {
    //   wishlist.map((item) => (
    //     <View>
    //       <Text>{item.rating}</Text>
    //     </View>
    //   ));
    // }
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'https://play.google.com/store/apps/details?id=host.exp.exponent',
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

  // const place = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />

      <ImageBackground
        style={{ flex: 0.7 }}
        source={require("../database/images/products/woman.jpg")}
      >
        <View style={style.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={navigation.goBack}
          />
        </View>
        <View style={style.imageDetails}>
          <Text
            style={{
              width: "70%",
              fontSize: 30,
              fontWeight: "bold",
              color: COLORS.white,
              marginBottom: 20,
            }}
          >
            {/* {place.name} */}
          </Text>
        </View>
      </ImageBackground>
      <View style={style.detailsContainer}>
        {/* <View style={style.iconContainer}>
          <Icon name="favorite" color={COLORS.red} size={30} />
        </View> */}
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          {/* <Icon name="place" size={28} color={COLORS.primary} /> */}
          <Text
            style={{
              marginLeft: 5,
              fontSize: 20,
              fontWeight: "bold",
              color: COLORS.primary,
            }}
          >
            {/* {place.location} */}
          </Text>
        </View>
        <Text style={{ marginTop: -40, fontWeight: "bold", fontSize: 25 }}>
          All Packages
        </Text>
        <Text style={{ marginTop: -5, lineHeight: 32, fontSize: 15 }}>
           Woman Haircut
        </Text>
        <View>
          {/* <>
            {wishlist.map((item) => (
              <View>
                <Text>{item.rating}</Text>
              </View>
            ))}
          </> */}
        </View>
        <ScrollView
          style={{ marginBottom: -180 }}
          onAddWishlist={(x) => dispatch(addToWishlist(x))}
        >
          {data.map((item, index) => {
            return (
              <View
                style={[
                  style.popularCardWrapper,
                  {
                    marginTop: item.id == 1 ? 10 : 20,
                  },
                ]}
              >
                <View>
                  <View>
                    <View>
                      {wishlist.includes(item) ? (
                        <TouchableOpacity
                          style={{
                            width: 40,
                            height: 40,
                            backgroundColor: "#fff",
                            borderRadius: 20,
                            elevation: 5,
                            position: "absolute",
                            top: 0,
                            right: 0,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          // onPress={() =>
                          //   setWishlist(
                          //     wishlist.filter((x) => x.id !== item.id)
                          //   )
                          // }
                        >
                          <Image
                            source={require("../../../assets/menuicon/love.png")}
                            style={{ width: 24, height: 24 }}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          style={{
                            width: 40,
                            height: 40,
                            backgroundColor: "#fff",
                            borderRadius: 20,
                            elevation: 5,
                            position: "absolute",
                            top: -0,
                            right: -10,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          // onPress={()=>{
                          //   setWishlist([...wishlist,item]);
                          // }}
                          onPress={() => postData(item)}
                          
                        >
                          <Image
                            source={require("../../../assets/menuicon/love.png")}
                            style={{ width: 24, height: 24 }}
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                    <View>
                    <TouchableOpacity
                          style={{
                            width: 40,
                            height: 40,
                            backgroundColor: "#fff",
                            borderRadius: 20,
                            elevation: 5,
                            position: "absolute",
                            top: -0,
                            left: 260,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          onPress={onShare}
                        >
                          <Image
                            source={require("../../../assets/menuicon/share.png")}
                            style={{ width: 24, height: 24 }}
                          />
                        </TouchableOpacity>
                    </View>

                    <View style={style.popularTopWrapper}>
                      <MaterialCommunityIcons
                        name="crown"
                        size={12}
                        color={COLORS.primary}
                      />
                      <Text style={style.textname}>{item.name}</Text>
                    </View>
                    <View style={style.ratingWrapper}>
                      <MaterialCommunityIcons
                        name="star"
                        size={15}
                        color={COLORS.yellow}
                      />
                      <Text style={style.textrating}>{item.rating}</Text>
                    </View>
                    <View style={style.textoffer}>
                      <Text style={style.textoffers}>{item.offer}</Text>
                    </View>
                    <View style={style.popularTitlesWrapper}>
                      <Text style={style.textprice}>₹ {item.price}</Text>
                    </View>

                    <View style={style.linestyle}>
                      <Text style={style.textdis}>
                        <Entypo
                          name="dot-single"
                          size={30}
                          color={COLORS.black}
                        />
                        {item.discription}
                      </Text>
                    </View>
                  </View>
                  <View style={style.popularCardBottom}>
                      <View style={style.addButton}
                        
                      >
                        
                        {/* <Text style={{color:COLORS.primary, fontWeight:'700'}}
                        
                         onPress={() => bookingData(item)}
                        >ADD</Text> */}
                         
                        {booking.includes(item) ? (
                          <View 
                          //style={style.addedButton}
                          style={{marginLeft: 1}}
                          >
                          <Text style={{color:COLORS.primary, marginLeft:-10, fontWeight:'900',fontSize: 12}}
                        
                          //onPress={() => bookingData(item)}
                         >ADDED
                         <Feather
                            name="check-circle"
                            size={16}
                            color={COLORS.primary}
                            style={{ alignItems: "center" }}
                            
                          />
                         </Text>
                         </View>
                        ) : (
                          <TouchableOpacity>
                          <Text style={{color:COLORS.primary, fontWeight:'900',}}
                          onPressOut
                          ={()=>{
                            setBooking([...booking,item]);
                          }}
                         onPress={() => bookingData(item)}
                        >
                          <Feather
                            name="plus-circle"
                            size={16}
                            color={COLORS.primary}
                            style={{ alignItems: "center" }}
                            
                          />
                          ADD</Text>
                        </TouchableOpacity>
                        )}
                      
                      </View>
                    </View>
                  
                  </View>

                {/* <View style={style.popularCardRight}>
                  <Image source={item.image} style={style.popularCardImage} />
                </View> */}
              </View>
            );
          })}
        </ScrollView>
      </View>

      <View style={style.footer}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: COLORS.white,
            }}
          >
            <>
            {wishlist.map((item) => (
              <View>
                <Text style={{fontSize: 20, color: COLORS.white,}}>₹{item.price}</Text>
              </View>
            ))}
          </> 
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: COLORS.grey,
              marginLeft: 2,
            }}
          ></Text>
        </View>
        <View style={style.bookNowBtn}>
          <Text
            style={{ color: COLORS.primary, fontSize: 16, fontWeight: "bold" }}
          >
            Book Now
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  bookNowBtn: {
    height: 50,
    width: 150,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  linestyle: {
    marginTop: -7,
    marginLeft: 2,
  },

  serviceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 40,
    justifyContent: "space-between",
    elevation: 5,
    marginBottom: 200,
  },
  textname: {
    fontSize: 17,
    fontWeight: "600",
   
  },
  // textrating:{
  //   fontSize: 14,
  //   color: 'gray',
  //   marginLeft: 20,
  //   fontWeight: '500',
  // },
  textprice: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '500',
  },
  textdis: {
    marginTop: 5,
  },
  textoffers:{
    marginBottom: 0,
  },
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
  },
  textoffer: {
    marginLeft: 2,
  },
  popularCardWrapper: {
    backgroundColor: COLORS.grey,
    borderRadius: 25,
    paddingTop: 10,
    paddingLeft: 20,
    flexDirection: "row",
    overflow: "hidden",
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTopWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  popularTitlesWrapper: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: "black",
  },
  popularCardBottom: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 200,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 35,
    paddingVertical: 10,

    // borderTopRightRadius: 25,
    // borderBottomLeftRadius: 25,
    borderRadius: 13,
    marginTop: -120,
    marginLeft: 40,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 0,
  },
  textrating: {
    fontSize: 16,
    color: COLORS.textDark,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 40,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: "contain",
  },

  iconContainer: {
    height: 60,
    width: 60,
    position: "absolute",
    top: -30,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    top: -150,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    flex: 0.3,
    paddingTop: 20,
    marginBottom: -20,
  },
  header: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  imageDetails: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    bottom: 30,
  },
  footer: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default Electrician;
