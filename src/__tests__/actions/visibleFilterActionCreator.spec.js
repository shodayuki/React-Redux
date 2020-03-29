import {
	// 定数
	SHOW_ALL,
	SHOW_ACTIVE,
	SHOW_COMPLETED,

	// 関数
	showAll,
	showActive,
	showCompleted
} from '../../actions/visibleFilterActionCreator';

describe('visibleFilterActionCreatorのテスト', () => {
	it('showAll関数', () => {
		expect( showAll() ).toStrictEqual(
			{
				type: SHOW_ALL
			}
		);
	});

	it('showActive関数', () => {
		expect( showActive() ).toStrictEqual(
			{
				type: SHOW_ACTIVE
			}
		);
	});

	it('showCompleted関数', () => {
		expect( showCompleted() ).toStrictEqual(
			{
				type: SHOW_COMPLETED
			}
		)
	});
});