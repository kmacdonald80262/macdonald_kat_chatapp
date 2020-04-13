import chatmessage from './modules/chats.js';
import alertmessage from './modules/alerts.js';

const socket = io();

function logConnect({socketID, message}){

    console.log(socketID, message);
    vm.socketID = socketID;
    vm.alert = message;
}

function appendMessage(message){
    vm.messages.push(message);

}

function logDisconnect(response){


        vm.alert = response.message;

    console.log(response);
}

// create Vue instance
const vm = new Vue({
    data: {
        socketID: "",
        nickname: "",
        alert: "",
        message: "",
        messages: []

    },
    methods: {
        dispatchMessage(){
            socket.emit('chat message', {content: this.message, name: this.nickname || "Anonymous"});
            this.message = "";
        },


    },

    components: {

        newmessage: chatmessage,
        alertmessage: alertmessage,
    }

}).$mount(`#app`);

socket.on('connected', logConnect);
socket.addEventListener('chat message', appendMessage);
socket.addEventListener('disconnect', logDisconnect);