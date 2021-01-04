class WS {
    constructor() {
        this._host = window.location.origin.replace(/^http/, 'ws');
        this._ws = new WebSocket(this._host);

        this._ws.onopen = this.onOpen.bind(this);
        this._ws.onclose = this.onClose.bind(this);
    }

    onOpen = () => {
        console.log('----WEBSOCKET CONNECTED---------');
    }

    onClose = () => {
        console.log('----WEBSOCKET DISCONNECTED---------');
    }

    getOnMessage = cb => {
        this._ws.onmessage = message => {
            const { data } = message;
            cb(JSON.parse(data));
        }
    }

    sendMessage = message => {
        this._ws.send(JSON.stringify(message));
    }

    addUser = user => {
        this._ws.add(JSON.stringify(user));
    }

    deleteUser = user => {
        this._ws.delete(JSON.stringify(user));
    }
}

export default WS;
