import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { OrderContext } from './OrderContext';

const DashboardScreen = ({ navigation }) => {
  const { orders } = useContext(OrderContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>

      {orders.length === 0 ? (
        <Text style={styles.noOrders}>No orders placed yet.</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.tradeCard}>
              <Text style={styles.tradeText}>{item.type} - {item.product.name}</Text>
              <Text>Quantity: {item.quantity}</Text>
              <Text>Total: ₹{item.total}</Text>
            </View>
          )}
        />
      )}

      <View style={styles.buttons}>
        <Button title="Buy" onPress={() => navigation.navigate('Buy')} />
        <Button title="Sell" onPress={() => navigation.navigate('Sell')} />
        <Button title="View Trade History" onPress={() => navigation.navigate('TradeHistory')} />
        <Button title="Logout" color="red" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f6f8fa',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  noOrders: {
    textAlign: 'center',
    color: '#777',
    marginBottom: 20,
    fontSize: 16,
  },
  tradeCard: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  tradeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  buttons: {
    marginTop: 20,
    gap: 10,
  },
});
