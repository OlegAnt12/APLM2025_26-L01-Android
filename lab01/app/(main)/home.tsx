
import { View, TextInput, Button, StyleSheet, Keyboard } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'expo-router';


export default function Home() {
// Usar 'useState' para gerir o texto de entrada
  const [text, setText] = useState('');
  // ... Estilos de Exemplo

    const router = useRouter();

  function goToDisplay() {
    const trimmed = text.trim();
    if (!trimmed) {
      console.log('Erro', 'Por favor, escreva uma mensagem antes de continuar.');
      return;
    }
    Keyboard.dismiss();
    // Passa a mensagem via query string (encode para segurança)
    router.push(`/DisplayMessageScreen?message=${encodeURIComponent(trimmed)}`);
    // Alternativa: router.replace(...) se queres substituir a rota atual
  }
  return (
    <View style={styles.container}>
      {/* O TextInput capta o texto do utilizador e armazena-o no 'text' state */}
      <TextInput
        style={styles.input}
        placeholder="Digite sua mensagem"
        onChangeText={setText}
        value={text}
      />
      {/* O Botão trata o evento 'onPress' para navegar */}
      <Button
        title="Enviar"
        onPress={goToDisplay}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  list: {
    marginTop: 20,
  },
  listItem: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
});