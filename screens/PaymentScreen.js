import React from 'react';
import { View, Text, Button, StyleSheet, Image, Alert } from 'react-native';

const PaymentScreen = ({ route, navigation }) => {
  const { product, quantity, total } = route.params;

  const handlePayment = () => {
    Alert.alert('Payment Successful', `You have paid ₹${total} for ${quantity} ${product.name}(s).`);
    navigation.navigate('Dashboard'); // or Home, Buy etc.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Summary</Text>

      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text>Quantity: {quantity}</Text>
      <Text>Unit Price: ₹{product.price}</Text>
      <Text style={styles.total}>Total: ₹{total}</Text>

      <View style={{ marginTop: 20 }}>
        <Button title="Pay Now" onPress={handlePayment} />
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 6,
  },
  total: {
    fontSize: 18,
    color: '#2e7d32',
    marginTop: 10,
    fontWeight: 'bold',
  },
});
