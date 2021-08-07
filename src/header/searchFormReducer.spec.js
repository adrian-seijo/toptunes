import test from 'ava';
import {SEARCH_ACTION_TYPE} from './searchChangeAction.js';
import searchFormReducer, {DEFAULT_STATE} from './searchFormReducer.js';

test('searchReducer with no arguments should return the default state', (t) => {

	const actual = searchFormReducer();
	const expected = DEFAULT_STATE;

	t.deepEqual(actual, expected);
});

test('searchReducer with a null value should return null', (t) => {

	const actual = searchFormReducer(null);
	const expected = null;

	t.deepEqual(actual, expected);
});

test('searchReducer with a state value should return that state value', (t) => {

	const actual = searchFormReducer('foo');
	const expected = 'foo';

	t.deepEqual(actual, expected);
});

test('searchReducer with a null action should return the specified state', (t) => {

	const actual = searchFormReducer('foo', 'bar');
	const expected = 'foo';

	t.deepEqual(actual, expected);
});

test('searchReducer with a invalid object action should return the specified state', (t) => {

	const actual = searchFormReducer('foo', {bar: 'lorem'});
	const expected = 'foo';

	t.deepEqual(actual, expected);
});

test('searchReducer with an action object that doesn\'t match should return the specified state', (t) => {

	const actual = searchFormReducer('foo', {type: 'bar', value: 'lorem'});
	const expected = 'foo';

	t.deepEqual(actual, expected);
});

test('searchReducer with an search type object and no value should return empty string', (t) => {

	const actual = searchFormReducer('foo', {type: SEARCH_ACTION_TYPE});
	const expected = '';

	t.deepEqual(actual, expected);
});

test('searchReducer with an search type object and a value should return that value', (t) => {

	const actual = searchFormReducer('foo', {type: SEARCH_ACTION_TYPE, value: 'bar'});
	const expected = 'bar';

	t.deepEqual(actual, expected);
});
