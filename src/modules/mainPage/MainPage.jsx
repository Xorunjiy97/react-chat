import React from 'react';
import Login from '../login';
import Messenger from '../messenger/Messenger.jsx';

const MainPage = props => {
    const { isLogged } = props;
    console.log(props);

    return (
        <>
            {!isLogged ? <Login /> : <Messenger />}
        </>
    );
}

export default React.memo(MainPage);
