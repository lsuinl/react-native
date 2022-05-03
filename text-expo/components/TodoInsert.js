//텍스트 입력창, 추가버튼
// components/TodoInsert.js
import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const TodoInsert = ({onAddTodo}) => {
    const [newTodoItem, setNewTodoItem] = useState('');
    
    const todoInputHandler = newTodo => {
        setNewTodoItem(newTodo);
    };

    const addTodoHandler = () => {
        onAddTodo(newTodoItem);
        setNewTodoItem('');
    };
    
    return (
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder="Add an item!"
            value={newTodoItem}
            onChangeText={todoInputHandler}
            placeholderTextColor={'#999'}
            autoCorrect={false}
        />
        <View style={styles.button}>
            <Button title={'ADD'} onPress={addTodoHandler} color='black'/>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: { //컨테이터에 대한 전체적인 스타일
        flexDirection: 'row', //한줄로 정렬(여러줄 x)
        justifyContent: 'space-between', //요소들 사이에 동일한 간격을 둔다
        alignItems: 'center', //컨테이너의 세로 축의 중앙으로 정렬
    },
    input: { //입력창에 대한 스타일
        flex: 1,
        padding: 20, //크기?
        borderBottomColor: '#bbb', //줄 색
        borderBottomWidth: 1, //줄 두께
        fontSize: 24, //글자 크기
        marginLeft: 20, //왼쪽 여백
    },
    button: { //버튼에 대한 스타일
        marginRight: 10, //오른쪽으로
    },
});

export default TodoInsert;