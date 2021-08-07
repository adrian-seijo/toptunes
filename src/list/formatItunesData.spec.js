/* eslint-disable max-len */

import test from 'ava';
import {songA} from '../../testData/songs.js';
import formatItunesData from './formatItunesData.js';

test('formatItunesData with no value should return null', (t) => {

	const actual = formatItunesData();
	const expected = null;

	t.deepEqual(actual, expected);
});

test('formatItunesData with a song should return the formatted song', (t) => {

	const actual = formatItunesData(songA);
	const expected = {
		id: '1563812775',
		name: 'Save Your Tears (Remix)',
		artist: 'The Weeknd & Ariana Grande',
		externalUrl: 'https://music.apple.com/us/album/save-your-tears-remix/1563812774?i=1563812775&uo=2',
		image: {
			size: '170',
			url: 'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/c6/f0/59/c6f059f8-9323-de18-590e-f67728850d6f/21UMGIM33221.rgb.jpg/170x170bb.png',
		},
		images: [{
			size: '55',
			url: 'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/c6/f0/59/c6f059f8-9323-de18-590e-f67728850d6f/21UMGIM33221.rgb.jpg/55x55bb.png',
		},
		{
			size: '60',
			url: 'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/c6/f0/59/c6f059f8-9323-de18-590e-f67728850d6f/21UMGIM33221.rgb.jpg/60x60bb.png',
		},
		{
			size: '170',
			url: 'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/c6/f0/59/c6f059f8-9323-de18-590e-f67728850d6f/21UMGIM33221.rgb.jpg/170x170bb.png',
		}],
		preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/8d/00/41/8d0041ba-ebab-5421-a553-c7e2ce5bb527/mzaf_17158940086741572204.plus.aac.p.m4a',
		category: 'R&B/Soul',
		album: 'Save Your Tears (Remix) - Single'
	};

	t.deepEqual(actual, expected);
});
