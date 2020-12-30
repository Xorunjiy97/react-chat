import React from 'react';
import Login from './login';
import Messenger from './messenger/Messenger';

export default class Modules extends React.PureComponent {
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
