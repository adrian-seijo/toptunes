
/* eslint-env node */

module.exports = {
	mount: {
		src: '/js',
		assets: '/'
	},
	routes: [
		{
			match: 'routes',
			src: '.*',
			dest: '/index.html'
		}
	],
	optimize: {
		bundle: true,
		minify: true,
		target: 'es2018',
	},
	devOptions: {
		port: 8085
	},
	buildOptions: {
		out: 'dist',
		clear: false
	}
};
