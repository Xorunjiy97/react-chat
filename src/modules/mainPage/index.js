import Component from './MainPage';
import * as selectors from './selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoged: selectors.getCurrentUserStatus(state),
});


export default connect(mapStateToProps)(Component);