import {SEARCH_ACTION_TYPE} from './searchChangeAction.js';

export const DEFAULT_STATE = typeof window === 'object' ? new URL(location).searchParams.get('q') || '' : '';

export default (state = DEFAULT_STATE, action = {}) => {

	switch (action.type) {
		case SEARCH_ACTION_TYPE:
			return action.value || '';
		default:
			return state;
	}
};
