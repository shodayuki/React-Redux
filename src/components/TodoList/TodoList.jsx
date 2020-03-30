import React from 'react';
import { connect } from 'react-redux';
import {
  toggleTodoCompleted,
  deleteTodo
} from '../../actions/todoActionCreator';
import {
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from '../../actions/visibleFilterActionCreator';
import './TodoList.css'

const TodoList = (props) => {
  const todoItems = props.todos.map((todo, index) => {
    const textClassName = todo.hasCompleted() ? 'TodoList-item-completed' : '';

    return (
      <li
        key={index}
        className="TodoList-item container">
        <p>
          <span className={textClassName}>{todo.text}</span> {renderCompletedButton(props, todo)} {renderDeleteButton(props, todo)}
        </p>
      </li>
    );
  });

  return (
    <ul>
      {todoItems}
    </ul>
  );
};

const renderCompletedButton = (props, todo) => {
  const text = todo.hasCompleted() ? '未完了に戻す' : '完了にする';

  return (
    <button onClick={() => {
      props.toggleTodoCompleted(todo.id)
    }}>
      {text}
    </button>
  );
};

const renderDeleteButton = (props, todo) => {
  return (
    <button onClick={() => {
      props.deleteTodo(todo.id)
    }}>
      削除する
    </button>
  );
};

const mapStateProps = (state) => {
  let todos;
  if (state.visibleFilter === SHOW_ACTIVE) {
    todos = state.todos.filter(todo => !todo.hasCompleted());
  } else if (state.visibleFilter === SHOW_COMPLETED) {
    todos = state.todos.filter(todo => todo.hasCompleted());
  } else {
    todos = [...state.todos];
  }

  return { todos };
};

const mapDispatchToProps = {
  toggleTodoCompleted,
  deleteTodo
};

export default connect (
  mapStateProps,
  mapDispatchToProps
)(TodoList);