import {
	ADD_TODO,
	DELETE_TODO,
	TOGGLE_TODO_COMPLETED,
	addTodo,
	deleteTodo,
	toggleTodoCompleted
} from '../../actions/todoActionCreator';

describe('todoActionCreatorのテスト', () => {
	it('addTodo関数', () => {
		const dummyText = 'ダミーテキスト';
		const action = addTodo(dummyText);

		expect( action ).toStrictEqual(
			{
				type: ADD_TODO,
				text: dummyText
			}
		);
	});

	it('deleteTodo関数', () => {
		const id = 1;
		const action = deleteTodo(id);

		expect( action ).toStrictEqual(
			{
				type: DELETE_TODO,
				id
			}
		);
	});

	it('toggleTodoCompleted関数', () => {
		const id = 1;
		const action = toggleTodoCompleted(id);

		expect( action ).toStrictEqual(
			{
				type: TOGGLE_TODO_COMPLETED,
				id: id
			}
		);
	});
});