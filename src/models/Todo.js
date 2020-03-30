let nextId = 1;

class Todo {
	constructor(text) {
		this._id = nextId++;
		this._text = text;
		this._completed = false;
	}

	get id() {
		return this._id;
	}

	get text() {
		return this._text;
	}

	hasCompleted() {
		return this._completed;
	}

	toggle() {
		this._completed = !this._completed;
	}
}

export default Todo;