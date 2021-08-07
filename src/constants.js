
export const SONGS = 'songs';

export const ALBUMS = 'albums';

export const TYPES = [
	{
		key: SONGS,
		label: 'Songs',
		dataUrl: 'https://itunes.apple.com/us/rss/topsongs/limit=100/json'
	},
	{
		key: ALBUMS,
		label: 'Albums',
		dataUrl: 'https://itunes.apple.com/us/rss/topalbums/limit=100/json'
	}
];

export const LIST = 'list';

export const GRID = 'grid';

export const LAYOUTS = [
	{key: GRID, label: 'Grid', icon: 'icon-grid'},
	{key: LIST, label: 'List', icon: 'icon-list'}
];
