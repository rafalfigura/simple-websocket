import dotenv from "dotenv"
import WebSocketServer from "./websocket/websocket.server";
import DataProvider from "./data-provider/data.provider";
import DataIterator from "./data-provider/data.iterator";

dotenv.config({
    path: __dirname + '/../.env'
});

const webSocket = new WebSocketServer(
    parseInt(process.env.WEBSOCKET_PORT)
);

const dataIterator = new DataIterator(new DataProvider(process.env.FILE));

setInterval(() => {
    webSocket.send(dataIterator.getItem());
}, parseInt(process.env.SEND_ITERVAL));
