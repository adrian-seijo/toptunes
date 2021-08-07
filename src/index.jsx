import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Header from './header/index.js';
import Options from './options/index.js';
import List from './list/index.js';
import store from './store.js';

const App = () => (
	<Provider store={store}>
		<Header />
		<Options />
		<List />
	</Provider>
);

ReactDOM.render(<App />, document.querySelector('main'));
