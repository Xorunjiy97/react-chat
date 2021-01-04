const http = require('http');
const WebSocket = require('ws');

class Server {
    constructor(port, app, db) {
        this._db = db;
        this._app = app;
        this._port = port;
        this._server = http.createServer(this._app.getApp());
        this._ws = new WebSocket.Server({ server: this._server });
        this._clients = new Set();

        this._ws.on('connection', this.handleConnectedWS.bind(this));
    }

    start = () => {
        this._server.listen(this._port);
        console.log(`Server is running on: ${this._port}`);
    };

    handleConnectedWS = ws => {
        this._clients.add(ws);

        ws.on('message', data => {
            data = JSON.parse(data);
            this._db.addNewMessage(data);
            const messages = this._db.getMessages();

            for ( let client of this._clients) {
                client.send(JSON.stringify(messages));
            }
        })
    }
}

module.exports = Server;
