import React from 'react';
import {Item, Text, Button} from './TodoList.styled';

export class Todo extends React.Component {
  
  componentWillUnmount() {
    console.log('Розмонтування');
  }

   handleDelete = () => {
    this.props.onDelete(this.props.todoId)
  }

   handleChange = () => {
    this.props.onToggleCompleted(this.props.todoId)
  }

  render() {
    const { todoId, text, completed, onDelete, onToggleCompleted } = this.props
    return(
        <Item>
        <input
          type="checkbox"
          checked={completed}
          onChange={this.handleChange} />    
        <Text>{text}</Text>
        <Button onClick={this.handleDelete}>Delete</Button>
      </Item>
    )
  }
}