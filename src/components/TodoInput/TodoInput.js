import React, {useRef, useState} from "react";
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './TodoInput.styles';


const TodoInput = (props) => {
    const inputText = "";
    const [todoText, setTodoText] = useState("");
    const todoInput = useRef()

    const settodoText = () => {
        props.settodoText(todoText);
        setTodoText(inputText);
        todoInput.current.blur();
    }
    const changetodoText = value => {
        setTodoText(value);
        
    }

    return (
        <View style={styles.container}>
            <TextInput ref={todoInput} style={styles.textInput} placeholder={'Yapılacaklar..'} placeholderTextColor={'white'} onChangeText={changetodoText} value={todoText}>

            </TextInput>
            <TouchableOpacity style={todoText ===inputText ? styles.notButton : styles.button} onPress={settodoText} >
                <Text style={styles.buttonText}>
                    KAYDET
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default TodoInput;