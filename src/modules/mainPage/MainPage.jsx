import React from 'react';
import Login from '../login';
import Messenger from '../messenger';

export default class MainPage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isLogged: false,
        }
    }

    render() {
        const {
            isLogged,
        } = this.state;

        return (
            <>
                {!isLogged ? <Login /> : <Messenger />}
            </>
        )
    }
}