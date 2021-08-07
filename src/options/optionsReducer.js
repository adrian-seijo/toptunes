import {TYPES, LAYOUTS} from '../constants.js';
import {CHANGE_TYPE_ACTION} from './changeTypeAction.js';
import {CHANGE_LAYOUT_ACTION} from './changeLayoutAction.js';

const currentPath = typeof window === 'object' ? window.location.pathname : '';
const [
	_, // eslint-disable-line no-unused-vars
	type,
	layout
] = currentPath.split('/');

export const DEFAULT_STATE = {
	type: type || TYPES[0].key,
	layout: layout || LAYOUTS[0].key
};

export default (state = DEFAULT_STATE, action = {}) => {

	switch (action.type) {
		case CHANGE_TYPE_ACTION:
			return {
				...state,
				type: action.value || TYPES[0].key
			};
		case CHANGE_LAYOUT_ACTION:
			return {
				...state,
				layout: action.value || LAYOUTS[0].key
			};
		default:
			return state;
	}
};
