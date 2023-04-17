import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, RefreshControl, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import IPPORT from '../IPport';
import { ScrollView } from 'react-native-gesture-handler';
import COLORS from '../consts/color';

function PaymentHistory() {
  const [data, setData] = useState([]);
  const [deletedData, setDeletedData] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [booking, setBooking] = useState([]);
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setcurrentDate] = useState('');

  useEffect(() => {
    // Call your API or perform any action you want to load the content
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  useEffect(() => {
    var date = new Date().getDate()
    var month = new Date().getMonth()
    var year = new Date().getFullYear()
    var hours = new Date().getHours()
    var min = new Date().getMinutes()
    var sec = new Date().getSeconds()
    setcurrentDate(
      date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
    )
  }, [])





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
      const response = await axios.get(`http://${IPPORT}:4000/api/booking`);
      setData(response.data);
      // console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const calculateTotal = () => {
    let total = 0;
    booking.fetchData(item => {
      total += item.price;

    });
    return total;
  }



  // const deleteData = async (_id) => {
  //   try {
  //     const response = await axios.delete(`http://${IPPORT}:4000/api/booking/${_id}`);
  //     Alert.alert(
  //       "Removed from Bokking"
  //     )
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {/* <Text style={styles.title}>Payment History</Text> */}
          {data.map(item => (
            <View key={item.id} style={styles.payment}>
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.date}>Payment Sucessfully</Text>
              </View>
              <View style={styles.amountContainer}>
                <Text style={styles.amount}>₹{item.price}</Text>
                <Text style={styles.time}>{currentDate}</Text>
                {/* <Text style={{fontWeight: 10}}>Booked</Text> */}
                {/* <Text style={[styles.status, data.status === 'Paid' ? styles.paid : styles.pending]}>{data.status}</Text> */}
              </View>
            </View>
          ))}
        </ScrollView>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#555',
  },
  payment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    color: '#888',
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 5,
  },
  time: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginBottom: 5,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: 'center',
    minWidth: 80,
  },
  paid: {
    backgroundColor: '#5cb85c',
    color: '#fff',
  },
  pending: {
    backgroundColor: '#f0ad4e',
    color: '#fff',
  },
});


export default PaymentHistory;
