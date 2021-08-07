import {TYPES} from '../constants.js';
import formatItunesData from './formatItunesData.js';
import filterDataAction from './filterDataAction.js';

export const FETCH_DATA_INIT_TYPE = 'list/INIT';
export const FETCH_DATA_OK_TYPE = 'list/OK';
export const FETCH_DATA_DISCARD_TYPE = 'list/DISCARD';
export const FETCH_DATA_FAIL_TYPE = 'list/FAIL';

const fetchDataAction = () => async (dispatch, getState) =>  {

	try {

		dispatch({type: FETCH_DATA_INIT_TYPE});

		const {options} = getState();
		const {type} = options;
		const typeInfo = TYPES.find(({key}) => key === type);

		if (!typeInfo) {
			throw new Error('The selected type doesn\'t match any supported value');
		}

		const response = await fetch(typeInfo.dataUrl);

		if (!response.ok) {
			throw new Error(`Failed to get data for "${typeInfo.dataUrl}", code "${response.status}"`);
		}

		const data = await response.json();

		const {options: lastOptions} = getState();
		const {type: lastType, loading} = lastOptions;

		// If the type is different and we are loading then we can discard and wait for the new data
		if (lastType !== typeInfo.key && loading) {
			dispatch({type: FETCH_DATA_DISCARD_TYPE});
			return;
		}

		dispatch({
			type: FETCH_DATA_OK_TYPE,
			value: data.feed.entry.map(formatItunesData)
		});

		filterDataAction()(dispatch, getState);

	} catch (e) {
		dispatch({
			type: FETCH_DATA_FAIL_TYPE,
			value: e
		});
	}
};

export default fetchDataAction;
