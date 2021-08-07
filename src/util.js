export const debounce = (cb, delay = 100) => {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => cb(...args), delay);
	};
};
