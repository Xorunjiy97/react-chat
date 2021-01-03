import Component from './Messenger.jsx';
import * as actions from './actions';
import * as selectors from './selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoged: selectors.getCurrentUserStatus(state),
    chat: selectors.getCurrentChat(state),
    user: selectors.getCurrentUser(state),
});

const mapDispatchToProps = dispatch => ({
    currentUserLoged:() => dispatch(actions.openAutorisationPage()),
    sendMessage: payload => dispatch(actions.saveMessage(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);