import {connect} from 'react-redux';
import Options from './Options.jsx';
import changeTypeAction from './changeTypeAction.js';
import changeLayoutAction from './changeLayoutAction.js';

const mapStateToProps = ({options}) => options;

const mapDispatchToProps = {
	changeTypeAction,
	changeLayoutAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);
