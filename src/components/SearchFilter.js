import { StyleSheet, TextInput, View,Text,TouchableOpacity,Image } from "react-native";
import React, { useEffect, useState } from "react";
import COLORS from "../consts/color";
import { useNavigation } from "@react-navigation/native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import axios from "axios";
import IPPORT from "../IPport";
const PORT = 4000;

const SearchFilter = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [name, setName] = useState("")
  const [rating, setRating] = useState("")
  const [number, setNumber] = useState("")
    




  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://${IPPORT}:4000/api/searchbar`);
      setData(response.data);
      // console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  
  

    const [searchTerm, setSearchTerm] = useState('');
  
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    


  return (
    <View style={styles.searchbar}>
      <View style={styles.inputContainer}>
      <Feather
                        name="search"
                        size={20}
                        color={COLORS.primary}
                       
                      />
        <TextInput
          placeholder="Search Services"
          onChangeText={(text) => setSearchTerm(text)}
          value={searchTerm}
          style={{ color: COLORS.dark, marginLeft: 10 }}
        />
        {/* {filteredData.map((item) => (
          <Text >{item.title}</Text>
        ))} */}
      </View>
      <ScrollView style={{marginTop: 90}}>
            {
              filteredData.map((item,index)=>{
                return(
                  <View
                style={[
                  styles.popularCardWrapper,
                  {
                    marginTop: item.id == 1 ? 10 : 20,
                  },
                ]}>
                <View  >
                  <View style={{marginBottom: 10}}>
                  <TouchableOpacity
                  onPress={() => navigation.navigate("AllServices")}
                  >
                    <View   style = {{marginTop: 10}}>
                      
                      <Text>{item.title}</Text>
                    </View>
                    <View style={styles.ratingWrapper}>
                    <MaterialCommunityIcons
                        name="star"
                        size={15}
                        color={COLORS.yellow}
                      />
                    <Text>
                       {item.rating}
                      </Text>
                    </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
                )
              })
            }
             
      </ScrollView>
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  inputContainer: {
    height: 60,
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: "absolute",
    top: 25,
    flexDirection: "row",
    paddingHorizontal: 30,
    alignItems: "center",
    elevation: 12,
  },
  searchbar: {
    marginHorizontal: 20,
    marginTop: 20,
    
  },
  popularCardWrapper: {
    backgroundColor: COLORS.rgb,
    borderRadius: 10,
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
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 0,
  },
});
