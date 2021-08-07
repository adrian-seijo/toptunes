export const CHANGE_TYPE_ACTION = 'options/CHANGE_TYPE';

const changeTypeAction = (value) => {
	return {
		type: CHANGE_TYPE_ACTION,
		value: value || ''
	};
};

export default changeTypeAction;
