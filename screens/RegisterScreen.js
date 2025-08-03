import React, { useState } from 'react';
import { useContext } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { UserContext } from './UserContext';


  const RegisterScreen = ({ navigation }) => {
  const { register } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleRegister = () => {
    const success = register(name,email, password);
    if (success) {
      Alert.alert('Registration successful');
      navigation.navigate('Login');
    } else {
      Alert.alert('Username already exists');
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.welcomeBanner}>
            <Text style={styles.brandText}>SuryaDeals</Text>
        </View>
    <View style={styles.formContainer}>
      <Text style={styles.title}>Register</Text>
      
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Button title="Register" onPress={handleRegister} />

      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          Login here
        </Text>
      </Text>
    </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f8fa',
    //padding:25,
  },
  
   
  welcomeBanner: {
    padding:0,
    backgroundColor: '#6c089eff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'left',
    //marginBottom:50,

  },

  brandText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fbfdf5ff',
    marginBottom:10,
  },


  formContainer: {
    flex: 1,
    //justifyContent: 'center',
    padding: 20,
    marginTop:40,
  },

  title: {
    fontSize: 24,
    //marginTop:35,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 16,
    borderRadius: 6,
  },
  loginText: {
    marginTop: 20,
    textAlign: 'center',
  },
  loginLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
