import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todoActionCreator';
import './Form.css';

const Form = (props) => {
	const [text, setText] = useState('');

	const onChangeHandler = (event) => {
		setText(event.target.value);
	};

	const onClickButton = () => {
		if (text) {
			props.addTodo(text);
			setText('');
		}
	};

	return (
		<div className="container Form-container">
			<input className="Form-input" type="text" value={text} onChange={onChangeHandler}></input>
			<button onClick={onClickButton}>追加する</button>
		</div>
	)
}

const mapDispatchToProps = { addTodo };

export default connect(
	null,
	mapDispatchToProps
)(Form);