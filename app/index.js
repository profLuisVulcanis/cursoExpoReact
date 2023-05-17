import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from '../src/styles';
import { auth } from '../src/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';

export default function App() {
  const [userMail, setUserMail] = useState('admin@admin.com');
  const [userPass, setUserPass] = useState('12345678');
  const router = useRouter();

  function userLogin() {
    signInWithEmailAndPassword(auth,userMail,userPass)
      .then((userCredential) => {
        const user = userCredential.user;
        router.replace('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Login no Sistema</Text>
      <TextInput
        style={styles.formInput} 
        placeholder="E-mail de usuário"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        value={userMail}
        onChangeText={setUserMail}
      />
      <TextInput 
        style={styles.formInput}
        placeholder="Senha de usuário"
        autoCapitalize="none"
        secureTextEntry
        value={userPass}
        onChangeText={setUserPass}
      />
      <Pressable
        style={styles.sendButton}
        onPress={userLogin}
      >
        <Text style={styles.textButton}>Logar</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable>
          <Text>Esqueci a Senha</Text>
        </Pressable>
        <Pressable>
          <Text>Cadastrar</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}