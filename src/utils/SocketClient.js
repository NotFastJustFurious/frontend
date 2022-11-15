import io, {Socket} from "socket.io-client";

export default class SocketClient{
    constructor(){
        this.socket = io("http://localhost:3002/");
    }

    /**
     * @return {Promise<Boolean>}
     */
    async auth(token){
        return new Promise((resolve, reject) => {
            this.socket.emit("auth", token, (callback) => {
                resolve(callback === "OK");
            });
        });
    }

    emitSelect(target){
        this.socket.emit("select", target);
    }

    emitChat(message){
        this.socket.emit("chat", message);
    }

    handleChat(handler){
        this.socket.on("chat", handler);
    }

    /**
     * @return {Socket}
     */
    getSocket(){
        return this.socket;
    }
}
