"use strict";

const WebSocket = require('ws');

export default class WebSocketServer {

    /**
     * @param {number} port
     */
    constructor(port) {
        this._server = new WebSocket.Server({port: port});
        this._server.on('connection', webSocket => {
            this._connect(webSocket);
        });

        this.keepConnection();
    }

    /**
     * @param {WebSocket} webSocket
     * @private
     */
    _connect(webSocket) {
        webSocket.isAlive = true;
        webSocket.on('pong', () => {
            webSocket.isAlive = true
        });
        webSocket.on('message', (message) => {
            console.log('Received Message:');
            console.log(message);
        });

        webSocket.send('Connection Established');
    }

    /**
     * @param {string} message
     */
    send(message) {
        this._server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    }

    keepConnection() {
        setInterval(() => {
            this._server.clients.forEach(client => {
                if (client.isAlive === false) {
                    return client.terminate();
                }
                client.isAlive = false;
                client.ping(() => {});
            });
        }, 30000);
    }
}



