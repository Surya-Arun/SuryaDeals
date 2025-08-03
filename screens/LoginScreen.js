// screens/LoginScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { UserContext } from './UserContext';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(UserContext);

  const handleLogin = () => {
    const success = login(email, password);
    if (success) {
      navigation.navigate('Dashboard');
    } else {
      Alert.alert('Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      {/* Welcome Banner */}
      <View style={styles.welcomeBanner}>
        <Text style={styles.brandText}>SuryaDeals</Text>
        
      </View>

      {/* Main login form */}
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button title="Login" onPress={handleLogin} />

        <View style={{ marginTop: 20 }}>
          <Text style={{ textAlign: 'center' }}>
            Don't have an account?{' '}
            <Text
              style={{ color: 'blue' }}
              onPress={() => navigation.navigate('Register')}
            >
              Register here
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  welcomeBanner: {
    backgroundColor: '#6c089eff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'left',
    marginBottom:10,
  },

  brandText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f1eeebff',
    marginBottom: 5,
  },


  formContainer: {
    flex: 1,
    //justifyContent: 'center',
    padding: 24,
    marginTop: 50, // Keeps distance from banner
  },

  heading: {
    fontSize: 28,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 16,
    borderRadius: 6,
  },
});
