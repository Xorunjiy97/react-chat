import Component from './Login.jsx';
import * as actions from './actions';
import * as selectors from './selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoged: selectors.getCurrentUserStatus(state),
    currentUserName: selectors.getCurrentUserName(state),
});

const mapDispatchToProps = dispatch => ({
    saveCurrentUser: payload => dispatch(actions.onSaveCurrentUser(payload)),
    currentUserLoged:() => dispatch(actions.openChatPage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
