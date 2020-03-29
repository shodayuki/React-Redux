/***************************************************
 * このテストファイル(App.spec.js)は、
 * Store, Actions, Reducersの全体の動作を確認する。
 * (結合テスト的な立ち位置)
 ***************************************************/

import App from '../App';
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from '../actions/visibleFilterActionCreator';

describe('App.jsのテスト', () => {
  // 全てのテストケース実行時に
  // visibleFilterの値を `SHOW_ALL` で統一する
  beforeEach(() => {
    App.setVisibility(SHOW_ALL);
  });

  // storeのstate内を初期状態に戻す
  afterAll(() => {
    App.setVisibility(SHOW_ALL);
    App.deleteAllTodos();
  });

  it('一番最初はtodosは1件も無い', () => {
    const todos = App.getTodosByVisibleFilter();
    expect(todos).toStrictEqual([]);
  });

  it('3件todoを追加', () => {
    const length = 3;
    for (let i = 0; i < length; i++) {
      const text = 'ダミーテキスト' + i;
      App.addTodo(text);
    }

    const todos = App.getTodosByVisibleFilter();
    expect(todos.length).toStrictEqual(length);
  });

  it('追加した3件のtodoをdeleteAllTodosメソッドで全て削除する', () => {
    const defaultLength = 3;
    const todos = App.getTodosByVisibleFilter();
    expect(todos.length).toStrictEqual(defaultLength);

    App.deleteAllTodos();
    const newTodos = App.getTodosByVisibleFilter();

    expect(newTodos.length).toStrictEqual(0);
  });

  it('SHOW_ACTIVE, SHOW_COMPLETEDの挙動を確認する', () => {
    const length = 3;
    for (let i = 0; i < length; i++) {
      const text = 'ダミーテキスト' + i;
      App.addTodo(text);
    }

    const todos = App.getTodosByVisibleFilter();
    expect(todos.length).toStrictEqual(length);

    // 最初の1件だけcompletedの状態にする
    App.toggleTodoCompleted(0);

    // SHOW_ACTIVE時の動作確認
    App.setVisibility(SHOW_ACTIVE);
    const acitiveTodos = App.getTodosByVisibleFilter();
    expect(acitiveTodos.length).toStrictEqual(length - 1);
    expect(acitiveTodos.every(todo => !todo.hasCompleted()))
      .toStrictEqual(true);

    // SHOW_COMPLETED時の動作確認
    App.setVisibility(SHOW_COMPLETED);
    const completedTodos = App.getTodosByVisibleFilter();
    expect(completedTodos.length).toStrictEqual(1);
    expect(completedTodos[0].hasCompleted())
      .toStrictEqual(true);
  });

  it('setVisibilityメソッドの引数に意図しない文字列が渡ってきたら例外を投げる', () => {
    const errorFunc = () => {
      App.setVisibility('Invalid string.');
    };

    expect(errorFunc).toThrowError(
      new Error(`「${SHOW_ALL}, ${SHOW_ACTIVE}, ${SHOW_COMPLETED}」 以外は入力できません`)
    );
  });
});