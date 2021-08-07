import test from 'ava';
import searchAction, {SEARCH_ACTION_TYPE} from './searchChangeAction.js';

test('searchAction with no value should return an action object with empty value', (t) => {

	const actual = searchAction();
	const expected = {
		type: SEARCH_ACTION_TYPE,
		value: ''
	};

	t.deepEqual(actual, expected);
});

test('searchAction with null value should return an action object with empty value', (t) => {

	const actual = searchAction(null);
	const expected = {
		type: SEARCH_ACTION_TYPE,
		value: ''
	};

	t.deepEqual(actual, expected);
});

test('searchAction with a number value should return an action object with that number as value', (t) => {

	const actual = searchAction(5);
	const expected = {
		type: SEARCH_ACTION_TYPE,
		value: 5
	};

	t.deepEqual(actual, expected);
});

test('searchAction with a string value should return an action object with that string as value', (t) => {

	const actual = searchAction('lorem');
	const expected = {
		type: SEARCH_ACTION_TYPE,
		value: 'lorem'
	};

	t.deepEqual(actual, expected);
});
