// packages/app/App.js
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Importa a lógica de DOMÍNIO e o Serviço da API
import { Quote } from '@rn/common';
import { QuoteService } from '@rn/api';

const MainApp = () => {
  const [currentQuote, setCurrentQuote] = useState(null);

  useEffect(() => {
    // 1. Usa o módulo de API (que por sua vez usa o módulo comum)
    const serviceQuote = QuoteService.getNewQuote();
    
    // 2. Usa o módulo Comum diretamente
    const directQuote = new Quote(2, "App UI", "A aplicação React Native está modularizada.");

    setCurrentQuote({ service: serviceQuote, direct: directQuote });
  }, []);

  if (!currentQuote) {
    return <Text>A carregar lógica modular...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>App Principal (Depende de API e Common)</Text>

      <Text style={styles.title}>Citação via Módulo API:</Text>
      <Text style={styles.quoteText}>{currentQuote.service.toString()}</Text>

      <Text style={styles.title}>Citação via Módulo Comum (Direto):</Text>
      <Text style={styles.quoteText}>{currentQuote.direct.toString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
  },
  quoteText: {
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingHorizontal: 10,
  }
});

export default MainApp;