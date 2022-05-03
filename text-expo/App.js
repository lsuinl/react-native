import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import TodoInsert from './components/TodoInsert';//tosoinsert파일 컴포넌트 임포트
import TodoList from './components/TodoList'; //스크롤 바를 만든 파일

const App =() => {
  //todos: {id: Number, textValue: String, checked: Boolean}
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };

  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = id => e => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello Todolist!</Text> 
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  //뭘까
    backgroundColor: '#6EE3F7', //전체배경색
  },
  appTitle:{ //앱 타이틀(제목)에 대한 스타일
    color:'#fff', //내용물색
    fontSize:30, //글자사이즈
    marginTop:50, //위치
    marginBottom:30, //위치2
    fontWeight:'500', //글씨 두께
    textAlign:'center',//뭐여
    backgroundColor:'#6EE3F7', //배경색
  },
  card: { //전체 카드뷰에 대한 스타일
    backgroundColor: '#fff', //배경색
    flex: 1, //머였더라
    borderTopLeftRadius:10, //왼쪽위 모서리 둥글게
    borderTopRightRadius:10, //오른쪽위 모서리 둥글게
    marginLeft: 20, //왼쪽여백
    marginRight: 20, //오른쪽여백
  },
});

export default App;