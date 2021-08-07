
const CACHE_NAME = 'cache-v2';

const ASSETS = [
	'/',
	'/index.html',
	'/albums',
	'/albums/list',
	'/albums/grid',
	'/songs',
	'/songs/list',
	'/songs/grid',
	'/manifest.json',
	'/base.css',
	'/icons/bar.svg',
	'/icons/logo.png',
	'/icons/splash.png',
	'/icons/th.svg',
	'/js/index.js',
];

const cacheInit = async () => {
	const cache = await caches.open(CACHE_NAME);
	return cache.addAll(ASSETS);
};

const copyResponse = async (response) => {
	const clone = response.clone();
	const body = await clone.blob();

	const {status, statusText, headers} = clone;
	const headerKeys = Array.from(headers.keys());

	return new Response(body, {
		status,
		statusText,
		headers: headerKeys.reduce((result, key) => {
			result[key] = headers.get(key);
			return result;
		}, {
			'last-fetched': (new Date()).toISOString()
		})
	});
};

const fetchAndCache = async (request) => {
	const response = await fetch(request);

	if (!response || !response.ok) {
		return response;
	}

	const updateResponse = await copyResponse(response);

	const cache = await caches.open(CACHE_NAME);
	cache.put(request, updateResponse.clone());

	return updateResponse;
};

const handleRequest = async ({request}) => {
	const response = await caches.match(request);

	if (response) return response;

	// If it is a request to the same origin as the worker we fetch and cache
	if (request.url.startsWith(self.location.origin)) {
		return fetchAndCache(request);
	}

	return fetch(request);
};

/**
 * Gop through all the caches we have and delete the ones that don't match the current one
 * @async
 */
const deleteOldCaches = async () => {
	const cacheNames = await caches.keys();

	cacheNames
		.filter((name) => name !== CACHE_NAME)
		.forEach((name) => caches.delete(name));
};

self.addEventListener('install', (event) => event.waitUntil(cacheInit()));
self.addEventListener('fetch', (event) => event.respondWith(handleRequest(event)));
self.addEventListener('activate', (event) => event.waitUntil(deleteOldCaches()));
