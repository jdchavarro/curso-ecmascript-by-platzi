class Message {
    #show(val) {
        console.log(val);
    }
}

const message = new Message();
message.show('Hola'); // TypeError: message.show is not a function