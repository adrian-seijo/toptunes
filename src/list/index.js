import {connect} from 'react-redux';

import fetchDataAction from './fetchDataAction.js';
import toggleAudioAction from './toggleAudioAction.js';
import List from './List.jsx';

const mapStateToProps = ({options, list}) => ({
	...options,
	...list
});

const mapDispatchToProps = {
	fetchDataAction,
	toggleAudioAction
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
