export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';

export const showAll = () => {
	return {
		type: SHOW_ALL
	};
};

export const showActive = () => {
	return {
		type: SHOW_ACTIVE
	};
};

export const showCompleted = () => {
	return {
		type: SHOW_COMPLETED
	};
};