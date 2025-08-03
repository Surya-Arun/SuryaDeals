import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { OrderContext } from './OrderContext';

const TradeHistoryScreen = () => {
  const { orders } = useContext(OrderContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trade History</Text>

      {orders.length === 0 ? (
        <Text style={styles.noHistory}>No trade history yet.</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.tradeType}>{item.type} - {item.product.name}</Text>
              <Text>Quantity: {item.quantity}</Text>
              <Text>Total: ₹{item.total}</Text>
              <Text>Date: {item.date}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default TradeHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f6f8fa',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  noHistory: {
    textAlign: 'center',
    color: '#777',
    marginTop: 20,
    fontSize: 16,
  },
  card: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  tradeType: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
});
