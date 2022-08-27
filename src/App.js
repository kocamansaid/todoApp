import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import TodoInput from "./components/TodoInput";
import ToDoCard from "./components/ToDoCard/ToDoCard";

let data = [
      

];
function App() {
  const [todoData, settodoData] = useState(data)
  const [count, setCount] = useState(0)


  

  const checkedTodo = (id) => {
    data.map(item => { if (item.id === id) { item.isOk = true; return item } else { return item } console.log(item)})
    
    settodoData(data)
  }

  const deleteTodo = (id) => {
    data = data.filter(item => item.id !== id)
    settodoData(data)
    setCount(data.filter(item => item.isOk === false).length)
  }
  const settodoText = (text) => {
    let todoItem = {
      id: Math.random(),
      title: text.trim(),
      isOk: false
    }
    data.push(todoItem)
    settodoData(data)
    console.log(data[0])
    setCount(todoData.length)
    
    
  }

  const renderItem = ({ item }) => (
    <ToDoCard title={item.title} id={item.id} isOk={item.isOk} onDeleteTodo={deleteTodo} onCheckedTodo={checkedTodo}>

    </ToDoCard>
  );
  const keyExtractorTodoItem = (item) => item.id.toString()

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>
          Yapılacaklar
        </Text>
        <Text style={styles.piece}>
          {count}
        </Text>

      </View>
      <View style={styles.todoCardContainer}>
        <FlatList data={todoData} renderItem={renderItem} keyExtractor={keyExtractorTodoItem}>
        </FlatList>
      </View>
      <TodoInput settodoText={settodoText}>

      </TodoInput>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f2027',
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-between",
  },
  innerContainer: {

    justifyContent: "space-between",
    flexDirection: 'row',

  },
  text: {
    color: '#fda802',
    margin: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  todoCardContainer: {
    flex: 1
  },
  piece: {
    color: '#fda802',
    margin: 20,
    fontSize: 30,
    fontWeight: 'bold',
  }

})
