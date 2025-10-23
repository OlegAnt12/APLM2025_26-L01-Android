import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  Button, 
  FlatList, 
  Text, 
  StyleSheet,
  StatusBar
} from 'react-native';

// 1. Interface que define a estrutura de cada item da lista (Resolver o erro 'never')
interface Todo {
  key: string;
  text: string;
}

const HomeScreen: React.FC = () => {
  // 2. Tipagem explícita do useState para array de Todo
  const [todos, setTodos] = useState<Todo[]>([]); 
  const [currentText, setCurrentText] = useState('');

  const addTask = () => {
    if (currentText.trim().length > 0) {
      const newItem: Todo = { // O TypeScript agora sabe que newItem é do tipo Todo
        key: Math.random().toString(), 
        text: currentText.trim() 
      };

      setTodos([
        newItem,
        ...todos, 
      ]);

      setCurrentText('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma nova tarefa..."
          onChangeText={setCurrentText}
          value={currentText}
          onSubmitEditing={addTask} 
        />
        
        <Button 
          title="Adicionar Tarefa" 
          onPress={addTask} 
          color="#007AFF"
        />
      </View>

      <FlatList
        data={todos} // O 'data' agora é garantido ser do tipo Todo[]
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

// ... Estilos (StylesSheet) ...
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight || 40,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  input: {
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#f7f7f7',
    borderRadius: 5,
  },
  listItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderColor: '#eee',
    borderWidth: 1,
  },
  listText: {
    fontSize: 16,
  }
});

export default HomeScreen;