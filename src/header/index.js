import {connect} from 'react-redux';

import filterDataAction from '../list/filterDataAction.js';
import Header from './Header.jsx';
import searchChangeAction from './searchChangeAction.js';

const mapStateToProps = ({search}) => ({
	search
});

const mapDispatchToProps = {
	searchChangeAction,
	filterDataAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
