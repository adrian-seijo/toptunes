import React, {PureComponent} from 'react';
import propTypes from 'prop-types';

import {debounce} from '../util.js';
import './header.css';

const updateUrl = debounce((value, action) => {
	const newUrl = new URL(window.location);
	newUrl.searchParams.set('q', value);

	history.pushState({}, null, newUrl);
	action();
}, 300);

export default class Header extends PureComponent {

	static displayName = 'Header';

	static propTypes = {
		search: propTypes.string,
		searchChangeAction: propTypes.func.isRequired,
		filterDataAction: propTypes.func.isRequired
	};

	onInput = ({target}) => {
		this.props.searchChangeAction(target.value);

		updateUrl(target.value, this.props.filterDataAction);
	}

	render() {

		const {search} = this.props;

		return (
			<header>
				<h1>TopTunes</h1>
				<form name="search">
					<input type="search" name="q" placeholder="Type to search..."
						onInput={this.onInput} value={search}/>
				</form>
			</header>
		);
	}
}
