export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO_COMPLETED = 'TOGGLE_TODO_COMPLETED';

export const addTodo = (text) => {
	return {
		type: ADD_TODO,
		text
	};
};

export const deleteTodo = (id) => {
	return {
		type: DELETE_TODO,
		id
	};
};

export const toggleTodoCompleted = (id) => {
	return {
		type: TOGGLE_TODO_COMPLETED,
		id
	};
};