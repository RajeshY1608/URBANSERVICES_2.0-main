import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FlashMessage from "react-native-flash-message";
import Welcome from './src/screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import HomeScreen from './src/HomeScreen';
import Details from './src/Details';
import OnBord from './src/OnBord';
import ManHairCut from './src/AllServices/Salon/ManHairCut';

import Plumber from './src/AllServices/Plumber & Carpenter/Plumber';
import Electrician from './src/AllServices/Electrician';
import Spa from './src/AllServices/Salon/Spa';
import Massage from './src/AllServices/Massage/Massage';
import AllServices from './src/AllServices/AllServices';
import BookingScreen from './src/BookingScreen';
import ProfileScreen from './src/ProfileScreen';
import Editprofile from './src/screens/Editprofile';
import WishlistScreen from './src/WishlistScreen';
import SearchFilter from './src/components/SearchFilter';
import SignOutScreen from './src/SignOutScreen';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import COLORS from './src/consts/color';
import Setting from './src/screens/Setting';
import AboutUs from './src/screens/Aboutus';
import PaymentHistory from './src/screens/PaymentHistory';
import Support from './src/screens/Support';
import Bathroomclean from './src/AllServices/Salon/Bathroomclean';
import WomanHairCut from './src/AllServices/Salon/WomanHairCut';
import Mansalon from './src/AllServices/Salon/Mansalon';
import Fullhomwclean from './src/AllServices/Salon/Fullhomwclean';
import Kitchenclean from './src/AllServices/Salon/Kitchenclean';
import Manspa from './src/AllServices/Salon/Manspa';
import Massageman from './src/AllServices/Salon/Massageman';
import Serviceinfo from './src/AllServices/Salon/Serviceinfo';
import Womansalon from './src/AllServices/Salon/Womansalon';
import Womanspa from './src/AllServices/Salon/Womanspa';
import PaymentPage from './src/Payment/PaymentPage';
import CreditDebit from './src/Payment/CreditDebit';
import Bankaccount from './src/Payment/Bankaccount';
import Upi from './src/Payment/Upi';
import Tv from './src/AllServices/Salon/Tv';
import Fridge from './src/AllServices/Salon/Fridge';
import Dis from './src/AllServices/Salon/Dis';
import Ac from './src/AllServices/Salon/Ac';
import Carpenter from './src/AllServices/Plumber & Carpenter/Carpenter';
import Chatbot from './src/ChatBot/chatbot';



const Stack = createNativeStackNavigator();

const App = () =>{
  return (
    <NavigationContainer>
       
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='OnBord' component={OnBord}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='Details' component={Details}/>
        <Stack.Screen name='ManHairCut' component={ManHairCut}/>
        <Stack.Screen name='WomanHairCut' component={WomanHairCut}/>
        <Stack.Screen name='Mansalon' component={Mansalon}/>
        <Stack.Screen name='Fullhomwclean' component={Fullhomwclean}/>
        <Stack.Screen name='Kitchenclean' component={Kitchenclean}/>
        <Stack.Screen name='Massageman' component={Massageman}/>
        <Stack.Screen name='Serviceinfo' component={Serviceinfo}/>
        <Stack.Screen name='Tv' component={Tv}/>
        <Stack.Screen name='Ac' component={Ac}/>
        <Stack.Screen name='Dis' component={Dis}/>
        <Stack.Screen name='Fridge' component={Fridge}/>
        <Stack.Screen name='Womansalon' component={Womansalon}/>
        <Stack.Screen name='Womanspa' component={Womanspa}/>
        <Stack.Screen name='PaymentPage' component={PaymentPage}/>
        <Stack.Screen name='CreditDebit' component={CreditDebit}/>
        <Stack.Screen name='Bankaccount' component={Bankaccount}/>
        <Stack.Screen name='Upi' component={Upi}/>
        <Stack.Screen name='Manspa' component={Manspa}/>
        <Stack.Screen name='Carpenter' component={Carpenter}/>
        <Stack.Screen name='Chatbot' component={Chatbot}
         options={{
          headerShown: true,
          headerTitleStyle:{
            fontSize: 25
          },
          headerTitle: "ChatBot",
          //headerTitleAlign: 'center'
        }}
        />
        
        <Stack.Screen name='Setting' component={Setting}
          options={{
            headerShown: true,
            headerTitleStyle:{
              fontSize: 25
            },
            headerTitle: "Setting",
            //headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name='Plumber' component={Plumber}/>
        <Stack.Screen name='Electrician' component={Electrician}
          
        />
        <Stack.Screen name='Spa' component={Spa}/>
        <Stack.Screen name='Massage' component={Massage}/>
        <Stack.Screen name='SearchFilter' component={SearchFilter}/>
        <Stack.Screen name='PaymentHistory' component={PaymentHistory}
        options={{
          headerShown: true,
          headerTitleStyle:{
            fontSize: 25
          },
          headerTitle: " Payments History",
          //headerTitleAlign: 'center'
        }}
        />
        <Stack.Screen name='Bathroomclean' component={Bathroomclean}
       
        />
        <Stack.Screen name='Support' component={Support}
        options={{
          headerShown: true,
          headerTitleStyle:{
            fontSize: 25
          },
          headerTitle: " Support",
          //headerTitleAlign: 'center'
        }}
        />
        <Stack.Screen name='AllServices' component={AllServices}
           options={{
            headerShown: true,
            headerTitleStyle:{
              fontSize: 25
            },
            headerTitle: "All Services",
            //headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name='AboutUs' component={AboutUs}
           options={{
            headerShown: true,
            headerTitleStyle:{
              fontSize: 25
            },
            headerTitle: "About Us",
            //headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Signup' component={Signup}/>
        <Stack.Screen name='Editprofile' component={Editprofile}
          options={{
            headerShown: true,
            headerTitleStyle:{
              fontSize: 25
            },
            headerTitle: "Edit Profile",
            //headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name='ProfileScreen' component={ProfileScreen}
          options={{
            headerShown: true,
            headerTitleStyle:{
              fontSize: 25
            },
            headerTitle: "Profile",
            headerTitleAlign: 'center',
            
            
          }}
          
        />
        <Stack.Screen name='BookingScreen' component={BookingScreen}
          options={{
            headerShown: true, 
            headerTitleStyle:{
              fontSize: 25
            },
            headerTitle: "Booking",
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name='WishlistScreen' component={WishlistScreen}
          options={{
            headerShown: true,
            headerTitleStyle:{
              fontSize: 25
            },
            headerTitle: "Wishlist",
            headerTitleAlign: 'center'
          }}
         
        />
        
        <Stack.Screen name='SignOutScreen' component={SignOutScreen}/>

      </Stack.Navigator>
      <FlashMessage position="bottom" />
    </NavigationContainer>
  );
};

export default App;