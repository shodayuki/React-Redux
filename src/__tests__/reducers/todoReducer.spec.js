import { todoReducer } from '../../reducers/todoReducer';
import {
	addTodo,
	deleteTodo,
	toggleTodoCompleted
} from '../../actions/todoActionCreator';
import Todo from '../../models/Todo';

describe('todoReducerのテスト', () => {
	it('action.type === ADD_TODOのとき、Todo1件追加した配列を返す', () => {
		const dummyText = 'ダミーテキスト';
		const action = addTodo(dummyText);
		const initialState = [];
		const newState = todoReducer(initialState, action);
		const todo = new Todo(dummyText);

		expect(newState).toStrictEqual([todo]);
	});

	it('action.type === DELETE_TODOのとき、index番号の要素を削除した配列を返す', () => {
		// テスト動作確認用にダミーデータを3件用意
		const prefixText = 'テスト';
		let state = [];
		for (let i = 0; i < 3; i++) {
			const text = prefixText + i;
			const action = addTodo(text);
			state = todoReducer(state, action);
		}

		const todo0 = new Todo(`${prefixText}0`);
		const todo1 = new Todo(`${prefixText}1`);
		const todo2 = new Todo{`${prefixText}2`};

		expect(state).toStrictEqual([
			todo0,
			todo1,
			todo2
		]);

		// インデックス番号1を指定して、
		// 「action.type === DELETE_TODO」でreducerを実行
		const targetIndex = 1;
		const deleteAction = deleteTodo(targetIndex);
		state = todoReducer(state, deleteAction);
		expect(state).toStrictEqual([
			todo0,
			todo2
		]);
	});

	it('action.type === TOGGLE_TODO_COMPLETEDのとき、index番号の要素のcompletedが切り替わった配列を返す', () => {
		// テスト動作確認用にダミーデータを3件用意
		let state = [];
		const addAction = addTodo('ダミー');
		const targetIndex = 0;

		state = todoReducer(state, addAction);

		expect( state[targetIndex].hasCompleted() ).toStrictEqual(false);

		const toggleAction = toggleTodoCompleted(targetIndex);
		state = todoReducer(state, toggleACtion);

		expect( state[targetIndex].hasCompleted() ).toStrictEqual(true);
	});
});