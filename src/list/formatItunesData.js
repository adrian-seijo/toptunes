
const formatItunesData = (data) => {

	if (!data) return null;

	const {
		'im:name': name,
		'im:artist': artist,
		id: {
			attributes,
			label: externalUrl
		},
		'im:image': images,
		category,
		'im:collection': collection,
		link
	} = data;

	const lastImage = images.length - 1;
	const imageUrl = images[lastImage].label;
	const imageSize = images[lastImage].attributes.height;

	let previewInfo;

	if (Array.isArray(link)) {
		previewInfo = link.find((info) => info.attributes.title === 'Preview');
	}

	return {
		id: attributes['im:id'],
		name: name.label || '',
		artist: artist.label || '',
		externalUrl,
		image: {
			url: imageUrl,
			size: imageSize
		},
		images: images.map((image) => ({
			url: image.label,
			size: image.attributes.height
		})),
		category: category.attributes.label,
		album: collection ? collection['im:name'].label : '',
		preview: previewInfo ? previewInfo.attributes.href : null
	};
};

export default formatItunesData;
