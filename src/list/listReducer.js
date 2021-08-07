import {FILTER_DATA_UPDATE_TYPE} from './filterDataAction.js';
import {FETCH_DATA_INIT_TYPE, FETCH_DATA_OK_TYPE, FETCH_DATA_FAIL_TYPE} from './fetchDataAction.js';
import {TOGGLE_AUDIO_TYPE, END_AUDIO_TYPE} from './toggleAudioAction.js';

export const DEFAULT_STATE = {
	loading: false,
	error: null,
	rawData: [],
	filter: '',
	filteredData: [],
	preview: null,
	playing: false
};

export default (state = DEFAULT_STATE, action = {}) => {

	switch (action.type) {
		case FILTER_DATA_UPDATE_TYPE:
			return {
				...state,
				filteredData: action.value
			};
		case FETCH_DATA_INIT_TYPE:
			return {
				...state,
				rawData: [],
				loading: true
			};
		case FETCH_DATA_OK_TYPE:
			return {
				...state,
				error: null,
				loading: false,
				rawData: action.value || [],
			};
		case FETCH_DATA_FAIL_TYPE:
			return {
				...state,
				rawData: [],
				error: action.value,
				loading: false,
			};
		case TOGGLE_AUDIO_TYPE: {

			const {url, playing} = action.value;

			return {
				...state,
				preview: url,
				playing
			};
		}
		case END_AUDIO_TYPE:
			return {
				...state,
				playing: false
			};
		default:
			return state;
	}
};
