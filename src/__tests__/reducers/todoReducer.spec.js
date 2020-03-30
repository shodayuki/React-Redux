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

		expect(newState[0] instanceof Todo).toStrictEqual(true);
		expect(newState[0].text).toStrictEqual(dummyText);
		expect(newState[0].hasCompleted()).toStrictEqual(false);
	});

	it('action.type === DELETE_TODOのとき、index番号の要素を削除した配列を返す', () => {
		// テスト動作確認用にダミーデータを3件用意
		const prefixText = 'テスト';
		let state = [];
		for (let i = 0; i < 3; i++) {
			const text = prefixText + i;
			const action = addTodo(text);
			state = todoReducer(state, action);

			expect(state[i] instanceof Todo).toStrictEqual(true);
			expect(state[i].text).toStrictEqual(text);
			expect(state[i].hasCompleted()).toStrictEqual(false);
		}

		// インデックス番号1を指定して、
		// 「action.type === DELETE_TODO」でreducerを実行
		const targetId = state[1].id;
		const deleteAction = deleteTodo(targetId);
		const copiedState = [...state];
		state = todoReducer(state, deleteAction);

		expect(state).toStrictEqual([
			copiedState[0],
			copiedState[2]
		]);
	});

	it('action.type === TOGGLE_TODO_COMPLETEDのとき、index番号の要素のcompletedが切り替わった配列を返す', () => {
		// テスト動作確認用にダミーデータを3件用意
		let state = [];
		const addAction = addTodo('ダミー');
		const targetIndex = 0;

		state = todoReducer(state, addAction);

		expect( state[targetIndex].hasCompleted() ).toStrictEqual(false);

		const id = state[targetIndex].id;

		const toggleAction = toggleTodoCompleted(id);
		state = todoReducer(state, toggleAction);

		expect( state[targetIndex].hasCompleted() ).toStrictEqual(true);
	});
});