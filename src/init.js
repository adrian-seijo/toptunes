if ('serviceWorker' in navigator && import.meta.env.MODE !== 'development') {
	navigator.serviceWorker.register('/worker.js');
}
