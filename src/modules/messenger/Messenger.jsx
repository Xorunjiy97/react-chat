import React from 'react';
import './messangerStyled.css';

export default class Messenger extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        }
    }

    render() {
        return (
            <div className={'wrapper'}>
                <div className={'wrapper__header'}>
                    <span children={'Header'} />
                </div>
                <div className={'wrapper__body'}>

                </div>
            </div>
        )
    }
}
