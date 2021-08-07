import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import ListItem from './ListItem.jsx';
import './list.css';

const PLACEHOLDER_ITEM_COUNT = 10;

export default class List extends PureComponent {

	static displayName = 'List';

	static propTypes = {
		type: propTypes.string.isRequired,
		layout: propTypes.string.isRequired,
		loading: propTypes.bool.isRequired,
		error: propTypes.object,
		rawData: propTypes.array,
		filteredData: propTypes.array,
		preview: propTypes.string,
		playing: propTypes.bool,
		fetchDataAction: propTypes.func.isRequired,
		toggleAudioAction: propTypes.func.isRequired
	};

	constructor(props) {
		super(props);

		props.fetchDataAction();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.type !== this.props.type) {
			this.props.fetchDataAction();
		}
	}

	renderPlaceholders = () => {
		return Array.from(new Array(PLACEHOLDER_ITEM_COUNT))
			.map((_, index) => (
				<li key={index} className="placeholder-item" />
			));
	};

	render() {

		const {layout, loading, filteredData, toggleAudioAction, preview, playing} = this.props;

		let children;

		if (loading) {
			children = this.renderPlaceholders();
		} else {
			children = filteredData.map((row) => (
				<ListItem key={row.id}
					{...row}
					selected={row.preview === preview}
					playing={playing}
					onClick={toggleAudioAction}
				/>
			));
		}

		return (<ul className={`result layout-${layout}`}>{children}</ul>);
	}
}
