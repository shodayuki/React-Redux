import store from './store/index';
import {
  addTodo,
  deleteTodo,
  toggleTodoCompleted
} from './actions/todoActionCreator';
import {
  showAll,
  showActive,
  showCompleted,
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from './actions/visibleFilterActionCreator';

class App {
  static getTodosByVisibleFilter() {
    const { todos, visibleFilter } = store.getState();

    if (visibleFilter === SHOW_ACTIVE) {
      return todos.filter(todo => !todo.hasCompleted());
    } else if (visibleFilter === SHOW_COMPLETED) {
      return todos.filter(todo => todo.hasCompleted());
    }

    return todos;
  }

  static getCurrentVisibleFilter() {
    const { visibleFilter } = store.getState();

    return visibleFilter;
  }

  static setVisibility(filter) {
    let action;
    if (filter === SHOW_ALL) {
      action = showAll();
    } else if (filter === SHOW_ACTIVE) {
      action = showActive();
    } else if (filter === SHOW_COMPLETED) {
      action = showCompleted();
    } else {
      throw new Error(`「${SHOW_ALL}, ${SHOW_ACTIVE}, ${SHOW_COMPLETED}」 以外は入力できません`);
    }

    store.dispatch(action);
  }

  static addTodo(text) {
    const action = addTodo(text);
    store.dispatch(action);
  }

  static deleteTodo(index) {
    const action = deleteTodo(index);
    store.dispatch(action);
  }

  static deleteAllTodos() {
    const { todos } = store.getState();
    for (let i = 0; i < todos.length; i++) {
      const index = 0;
      App.deleteTodo(index);
    }
  }

  static toggleTodoCompleted(index) {
    const action = toggleTodoCompleted(index);
    store.dispatch(action);
  }
}

export default App;