import React, { useRef } from "react";
import { FlatList, Text, TextInput, Pressable, View } from 'react-native';
import styles from './ToDoCard.styles';


const ToDoCard = ({ onDeleteTodo, onCheckedTodo, title, id, isOk }) => {
    console.log(isOk)
    //const rendertodoCard = ({item}) => <Text item = {item} style={styles.todoText}>item</Text>;
    const button = useRef()
    const checkedTodo = () => onCheckedTodo(id);
    const deleteTodo = () => onDeleteTodo(id);
    return (



        <Pressable ref={button} onPress={checkedTodo} onLongPress={deleteTodo}>
            <View style={isOk ? styles.pressContainer : styles.container}>
                <Text style={isOk ? styles.pressTodoText : styles.todoText}>
                    {title}
                </Text></View>
        </Pressable >


    )
}
export default ToDoCard;