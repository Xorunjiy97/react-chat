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
         <div className = {"main-conatiner"}>
            <div className = {'main-container__header'}>
                <button className={"main-container__log-out"} children={"X"}>
                </button>
                <div className={"header__window-message"}>
                    <div>
                        <ul className={"ul__li"}>
                            <li className={"message-li__message-ul"}/>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={"main-container__footer"}>
                <input className={" footer__input-footer"} />
                <button className={" footer__button-footer"} children={"Send"}>
                </button>
            </div>
        </div>
        )
    }
}
