import React, {PureComponent} from 'react';
import propTypes from 'prop-types';

import {TYPES, LAYOUTS} from '../constants.js';
import './options.css';

export default class Options extends PureComponent {

	static displayName = 'Options';

	static propTypes = {
		type: propTypes.string.isRequired,
		layout: propTypes.string.isRequired,
		changeTypeAction: propTypes.func.isRequired,
		changeLayoutAction: propTypes.func.isRequired,
	};

	constructor(props) {
		super(props);

		window.addEventListener('popstate', () => {
			const {pathname} = window.location;
			const [
				_, // eslint-disable-line no-unused-vars
				type,
				layout
			] = pathname.split('/');

			props.changeTypeAction(type);
			props.changeLayoutAction(layout);
		});
	}

	onTypeClick = (event) => {
		event.preventDefault();

		const {currentTarget} = event;
		const {href, pathname, textContent} = currentTarget;

		history.pushState({}, textContent, href);

		this.props.changeTypeAction(pathname.substr(1));
	};

	onLayoutClick = (event) => {
		event.preventDefault();

		const {currentTarget} = event;
		const {href, pathname, textContent} = currentTarget;

		history.pushState({}, textContent, href);

		const [
			_, // eslint-disable-line no-unused-vars
			type, // eslint-disable-line no-unused-vars
			layout
		] = pathname.split('/');

		this.props.changeLayoutAction(layout);
	}

	render() {

		const {type, layout} =  this.props;

		return (
			<section className="options">
				<nav>
					<ul className="type-options">
						{TYPES.map(({key, label}) => (
							<li key={key} className={type === key ? 'selected' : ''}>
								<a href={'/' + key} onClick={this.onTypeClick}>
									{label}
								</a>
							</li>
						))}
					</ul>

					<ul className="layout-options">
						{LAYOUTS.map(({key, icon, label}) => (
							<li key={key} className={layout === key ? 'selected' : ''}>
								<a href={'/' + type + '/' + key} onClick={this.onLayoutClick}>
									<i className={`icon icon-small icon-list ${icon}`}>
										{label}
									</i>
								</a>
							</li>
						))}
					</ul>
				</nav>
			</section>
		);
	}
}
