export const FILTER_DATA_UPDATE_TYPE = 'filter/UPDATE';
export const FILTER_DATA_FAIL_TYPE = 'filter/FAIL';

export const matchAny = (fields, values) => fields
	.some((field = '') => values
		.some((value = '') => field.toLowerCase().includes(value.toLowerCase())));

const filterDataAction = () => (dispatch, getState) => {

	try {

		const {search, list} = getState();
		const {rawData = []} = list;

		const values = search.split(' ')
			.map((item) => item.trim())
			.filter((item) => item);

		let filteredData = rawData;

		if (values.length) {
			filteredData = rawData.filter(({name, artist, category, album}) => {
				return matchAny([name, artist, category, album], values);
			});
		}

		dispatch({
			type: FILTER_DATA_UPDATE_TYPE,
			value: filteredData
		});

	} catch (e) {
		dispatch({
			type: FILTER_DATA_FAIL_TYPE,
			value: e
		});
	}
};

export default filterDataAction;
