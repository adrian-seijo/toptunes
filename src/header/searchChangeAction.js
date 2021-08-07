export const SEARCH_ACTION_TYPE = 'SEARCH';

const searchChangeAction = (value) => {
	return {
		type: SEARCH_ACTION_TYPE,
		value: value || ''
	};
};

export default searchChangeAction;
