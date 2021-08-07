import React, {PureComponent} from 'react';
import propTypes from 'prop-types';

export default class ListItem extends PureComponent {

	static displayName = 'ListItem';

	static propTypes = {
		id: propTypes.string.isRequired,
		name: propTypes.string.isRequired,
		artist: propTypes.string.isRequired,
		album: propTypes.string,
		externalUrl: propTypes.string.isRequired,
		image: propTypes.shape({
			url: propTypes.string.isRequired,
			size: propTypes.string.isRequired
		}),
		images: propTypes.arrayOf(propTypes.shape({
			url: propTypes.string.isRequired,
			size: propTypes.string.isRequired
		})),
		category: propTypes.string.isRequired,
		preview: propTypes.string,
		selected: propTypes.bool,
		playing: propTypes.bool,
		onClick: propTypes.func
	};

	componentWillUnmount() {
		const {preview, playing, selected, onClick} = this.props;

		if (playing && selected) {
			onClick(preview, false);
		}
	}

	onButtonClick = ({currentTarget}) => {
		const {url} = currentTarget.dataset;
		this.props.onClick(url);
	};

	render() {
		const {name, artist, album, category, image, images, externalUrl, preview, selected, playing} = this.props;

		return (
			<li className={selected && playing ? 'audio-selected' : ''}>
				<div className="image-wrapper">
					{preview
						? <button type="button"
							data-url={preview}
							className={selected && playing ? 'playing' : ''}
							onClick={this.onButtonClick}>
								Play/Pause
						</button>
						: null
					}
					<img src={image.url}
						srcSet={images.map(({url, size}) => `${url} ${size}w`).join(', ')}
						height={image.size}
						width={image.size}
						loading="lazy"
						alt={`${name} cover art`}
					/>
				</div>
				<h1>{name}</h1>
				<h2>{artist + (album ? ' @ ' + album : '')}</h2>
				<h3>{category}</h3>
				<a href={externalUrl} target="_blank" rel="noreferrer">
					Listen on Apple Music
				</a>
			</li>
		);
	}
}
