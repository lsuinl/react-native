//추가된 아이템을 스크롤 뷰로 보여줌
// components/TodoList.js
import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, onRemove, onToggle}) => {
    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
        {todos.map(todo => (
            <TodoListItem
                key={todo.id} 
                {...todo} 
                onRemove={onRemove}
                onToggle={onToggle}
                />
        ))} 
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center', //컨테이너의 세로 축의 중앙으로 정렬
    },
});

export default TodoList;