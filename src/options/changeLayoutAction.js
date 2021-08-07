export const CHANGE_LAYOUT_ACTION = 'options/CHANGE_LAYOUT';

const changeLayoutAction = (value) => {
	return {
		type: CHANGE_LAYOUT_ACTION,
		value: value || ''
	};
};

export default changeLayoutAction;
