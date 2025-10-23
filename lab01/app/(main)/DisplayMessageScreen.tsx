import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function DisplayMessageScreen() {
  const { message } = useLocalSearchParams();
  const displayed = typeof message === 'string' ? message : '';
  return (
    <View>
      <Text>Mensagem Recebida: {message} </Text>
    </View>
  );
}
