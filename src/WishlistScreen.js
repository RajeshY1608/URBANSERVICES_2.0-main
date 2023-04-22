import { StyleSheet, Text, View,TouchableOpacity,RefreshControl } from 'react-native'
import React ,{useState,useEffect}from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import COLORS from './consts/color';
import axios from 'axios';
import IPPORT from './IPport';
import Menu from './screens/Menu';
import { Alert } from 'react-native';


const WishlistScreen = ({navigation}) => {
 
  const [data, setData] = useState([]);
  const [deletedData, setDeletedData] = useState('');
  const [wishlist, setWishlist] = useState([]);

  const [refreshing, setRefreshing] = React.useState(false);
 
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  useEffect(() => {
    fetchData();
  }, [data]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://${IPPORT}:4000/api/wishlist`);
      setData(response.data);
      // console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  };
  
  const deleteData = async (_id) => {
    try {
      const response = await axios.delete(`http://${IPPORT}:4000/api/wishlist/${_id}`);
      Alert.alert(
        "Removed from Wishlist"
      )
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (

    <View>
    <View style={{
                backgroundColor:"#f5f5fa",
                height:790,
                width:425,
                borderRadius:20,
                //marginTop:10,
                //marginRight:20,
                marginBottom:10
            }}>

      <ScrollView
          style={{ marginBottom:90 }}
          onAddWishlist={(x) => dispatch(addToWishlist(x))}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {data.map((item, index) => {
            return (
              <View
                style={[
                  styles.popularCardWrapper,
                  {
                    marginTop: item.id == 1 ? 10 : 20,
                  },
                ]}
                key={item._id}
              >
                <View>
                  <View>
                    <View style={styles.popularTopWrapper}>
                      <MaterialCommunityIcons
                        name="crown"
                        size={12}
                        color={COLORS.primary}
                      />
                      <Text style={styles.textname}>{item.name}</Text>
                    </View>
                    <View style={styles.ratingWrapper}>
                      <MaterialCommunityIcons
                        name="star"
                        size={10}
                        color={COLORS.yellow}
                      />
                      <Text style={styles.textrating}>{item.rating}</Text>
                    </View>
                    <View style={styles.textoffer}>
                      <Text style={styles.textprice}>{item.offer}</Text>
                    </View>
                    <View style={styles.popularTitlesWrapper}>
                      <Text style={styles.textprice}>₹ {item.price}</Text>
                    </View>

                    <View style={styles.linestyle}>
                      <Text style={styles.textdis}>
                        <Entypo
                          name="dot-single"
                          size={30}
                          color={COLORS.black}
                        />
                        {item.discription}
                      </Text>
                    </View>
                 
                  </View>
                  <View>
                  
                  <View style={styles.popularCardBottom}>
                  <TouchableOpacity>
                    <View style={styles.addButton}   
                    >
                      <Feather
                        name="trash-2"
                        size={18}
                        color={COLORS.dark}
                        style={{ alignItems: "center"}}
                        onPress={() => deleteData(item._id)}
                      />
                    </View>
                    </TouchableOpacity>
                    <View    
                    >
                    <TouchableOpacity style={styles.addButton1}>
                      <Text style={{alignItems:"center" , fontWeight:"bold"}}
                      onPress={() => navigation.navigate('PaymentPage')}
                      >BUY</Text>
                      </TouchableOpacity>
                    </View>
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
        <View style={styles.bottom}>
          <Menu />
          </View>
      </View>
     
    </View>
    
    
  )
}

export default WishlistScreen

const styles = StyleSheet.create({
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
  bottom:{
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
    paddingTop: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -150,
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0, 
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
  // textprice: {
  //   fontSize: 14,

  //   marginLeft: 10,
  //   fontWeight: '500',
  // },
  textdis: {
    marginTop: 5,
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
    paddingTop: 0,
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
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 25,
    paddingVertical: 8,

    // borderTopRightRadius: 25,
    // borderBottomLeftRadius: 25,
    borderRadius: 15,
    marginTop: -25,
    marginLeft: 70,
  },
  addButton1: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 40,
    paddingVertical: 10,

    // borderTopRightRadius: 25,
    // borderBottomLeftRadius: 25,
    borderRadius: 20,
    marginTop: -100,
    marginLeft: -90,
  },
  menuWrapper: {
    marginTop: 0,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
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
})
