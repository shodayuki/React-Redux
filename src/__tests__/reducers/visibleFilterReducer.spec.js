import { visibleFilterReducer } from '../../reducers/visibleFilterReducer';
import {
	showAll,
	showActive,
	showCompleted,
	SHOW_ALL,
	SHOW_ACTIVE,
	SHOW_COMPLETED
} from '../../actions/visibleFilterActionCreator';

describe('visibleFilterReducerのテスト', () => {
	const createInitialState = () => {
		const mockAction = {};
		const state  = visibleFilterReducer(undefined, mockAction);

		return state;
	};

	it('stateの初期値はSHOW_ALL', () => {
		const state = createInitialState();
		expect(state).toStrictEqual(SHOW_ALL);
	});

	it('action.type === SHOW_ALLのとき、文字列"SHOW_ALL"を返す', () => {
		const state = createInitialState();

		// SHOW_ALLのアクションを表す
		const action = showAll();
		const newState = visibleFilterReducer(state, action);
		expect(newState).toStrictEqual(SHOW_ALL);
	});

	it('action.type === SHOW_ACTIVEのとき"SHOW_ACTIVE"を返す', () => {
		const state = createInitialState();

		// SHOW_ACTIVEのアクションを表す
		const action = showActive();
		const newState = visibleFilterReducer(state, action);
		expect(newState).toStrictEqual(SHOW_ACTIVE);
	});

	it('action.type === SHOW_COMPLETEDのとき"SHOW_COMPLETED"を返す', () => {
		const state = showCompleted();

		// SHOW_COMPLETEDのアクションを表す
		const action = showCompleted();
		const newState = visibleFilterReducer(state, action);
		expect(newState).toStrictEqual(SHOW_COMPLETED);
	});
});