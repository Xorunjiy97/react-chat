import React from 'react';
import Login from '../login';
import Messenger from '../messenger/Messenger';

const MainPage = props => {
    const { isLoged } = props;

    return (
        <>
            {!isLoged ? <Login /> : <Messenger />}
        </>
    )
}

export default React.memo(MainPage);