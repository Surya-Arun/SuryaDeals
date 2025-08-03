// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import RegisterScreen from './screens/RegisterScreen';
import TradeHistoryScreen from './screens/TradeHistoryScreen';
import BuyScreen from './screens/BuyScreen';
import SellScreen from './screens/SellScreen';
import PaymentScreen from './screens/PaymentScreen';

import { OrderProvider } from './screens/OrderContext';
import { UserProvider } from './screens/UserContext';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
   
   <UserProvider>
    <OrderProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="TradeHistory" component={TradeHistoryScreen} />
          <Stack.Screen name="Buy" component={BuyScreen} />
          <Stack.Screen name="Sell" component={SellScreen} />
          <Stack.Screen name="Payment" component={PaymentScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </OrderProvider>
  </UserProvider> 
  );
}
