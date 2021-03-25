let subscribers = {
    "messages": [],
    "status": []
}

let ws;

function cleanUp() {
    ws.removeEventListener("open", setWsStatus);
    ws.removeEventListener("message", setMessages);
    ws.removeEventListener("close", setWsStatus);
}

function setWsStatus(status) {
    subscribers["status"].forEach(s => s(status))
}

function setMessages(e) {
    const newMessages = JSON.parse(e.data)
    subscribers["messages"].forEach(s => s(newMessages));
}

function reconnect() {
    setWsStatus("pending");
    setTimeout(createWSChannel, 3000)
}

function createWSChannel() {
   if (ws) {
       cleanUp();
       ws.close();
   }
   ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");
   ws.addEventListener("open", setWsStatus("ready"));
   ws.addEventListener("message", setMessages);
   ws.addEventListener("close", reconnect);
}

export const allUsersChatApI = {

    start: () => {
      createWSChannel();
    },

    subscribe: (eventName, callback) => {
        subscribers[eventName].push(callback);

        return () => {
            subscribers[eventName].filter(c => c !== callback);
        }
    },

    sendMessage: (message) => {
        ws.send(message);
    }

}
