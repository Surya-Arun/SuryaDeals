import React, { useState, useContext } from 'react';
import { useOrder } from '../screens/OrderContext'; 
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { OrderContext } from './OrderContext';

const products = [
  {
    id: 'laptop',
    name: 'HP Laptop',
    image: 'https://www.techtarget.com/rms/onlineimages/hp_elitebook_mobile.jpg',
    description: 'High-performance hp laptop with 16GB RAM and 512GB SSD.',
    price: 70000,
  },
  {
    id: 'tv',
    name: 'Smart TV',
    image: 'https://electronicparadise.in/cdn/shop/files/71PjEhrm8ML._SL1500.jpg?v=1707403004&width=1406',
    description: '50-inch 4K Ultra HD Smart TV with streaming apps.',
    price: 50000,
  },
  {
    id: 'phone',
    name: 'Smartphone',
    image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m33-1.jpg',
    description: 'Latest model smartphone with excellent camera and battery life.',
    price: 30000,
  },
];

const SellScreen = ({ navigation }) => {
  const { placeOrder } = useContext(OrderContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState('');

  const handleSell = () => {
    if (!selectedProduct || !quantity) {
      Alert.alert('Missing input', 'Please select a product and enter quantity.');
      return;
    }

    const total = selectedProduct.price * parseInt(quantity);

    // Save sell order to context
    placeOrder({
      type: 'Sell',
      product: selectedProduct,
      quantity: parseInt(quantity),
      total,
    });

    Alert.alert(
      'Sell Order Placed',
      `You are selling ${quantity} ${selectedProduct.name}(s) for ₹${total}.`
    );

    navigation.navigate('Dashboard');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Select a Product to Sell</Text>

      {products.map((product) => (
        <TouchableOpacity
          key={product.id}
          style={[
            styles.productItem,
            selectedProduct?.id === product.id && styles.selectedItem,
          ]}
          onPress={() => setSelectedProduct(product)}
        >
          <Text style={styles.productName}>{product.name}</Text>
        </TouchableOpacity>
      ))}

      {selectedProduct && (
        <View style={styles.detailsBox}>
          <Image source={{ uri: selectedProduct.image }} style={styles.image} />
          <Text style={styles.productTitle}>{selectedProduct.name}</Text>
          <Text style={styles.description}>{selectedProduct.description}</Text>
        </View>
      )}

      <TextInput
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
        style={styles.input}
      />

      <Button title="Place Sell Order" onPress={handleSell} />
    </ScrollView>
  );
};

export default SellScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f6f8fa',
  },
  title: {
    fontSize: 22,
    marginBottom: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productItem: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  selectedItem: {
    borderColor: '#d9534f',
    borderWidth: 2,
  },
  productName: {
    fontSize: 18,
  },
  detailsBox: {
    alignItems: 'center',
    marginVertical: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 12,
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 6,
  },
  description: {
    textAlign: 'center',
    color: '#555',
  },
  input: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },
});
