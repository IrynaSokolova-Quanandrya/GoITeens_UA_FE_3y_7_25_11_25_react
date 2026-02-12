import { Component } from 'react';
import { nanoid } from 'nanoid';
import initialTodos from '../../../todos.json';
import { TodoEditor } from '../TodoEditor/TodoEditor';
import {TodoList} from '../TodoList/TodoList';

export class App extends Component {  
  state={
    todos: [],
  }
  
  // false: 0, null, undefined, false, '', NaN

  componentDidMount() {
    const todos = localStorage.getItem('todos')
    
    if (todos) {
      const parsedTodos = JSON.parse(todos)
    this.setState({todos: parsedTodos})
    }
    
  }

  componentDidUpdate(prevProps, prevState) {  
    if (prevState.todos !== this.state.todos) {
      console.log(this.state.todos);
      window.localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }
  }


  addTodo = (text)=>{
    const newTodo = {
      id: nanoid(),
      text,
      completed: false
    }
    
  this.setState((prevState)=>{
    return {
      todos: [newTodo, ...prevState.todos]
    }
  })
  }

  deleteTodo = (todoId) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter(todo=>todo.id !== todoId)
      }
    })
  }

  toggleCompleted = (todoId) => {
    this.setState(prevState => (
      {
        todos: prevState.todos.map(todo =>
          todo.id === todoId
            ? { ...todo, completed: !todo.completed }
            : todo
      )}
    ))
  }

  render(){
    return (
      <>
      <TodoEditor addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} onDelete={this.deleteTodo} onToggleCompleted={this.toggleCompleted} />
    
      </>
    );
  }
};