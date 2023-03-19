class SocketHandlerInstance {
  constructor(socket) {
    this.socket = socket
    this.newMessageIndicator = process.env.SOCKET_COMMUNICATION_INDICATOR || 'message'
    this.init()
  }

  sendMessage (payload) {
    this.socket.broadcast.emit(this.newMessageIndicator, payload)
  }
  init() {
    this.socket.on(this.newMessageIndicator, (data) => this.messageHandler(data))
  }
  test (payload) {
    this.sendMessage({test: 'message2'})
    // this.socket.broadcast.emit(this.newMessageIndicator, {test: 'message'})
  }

  message (payload) {
    this.sendMessage({text: 'Ko stava', from: 'Petko'})
  }

  'join-room' (payload) {
    this.sendMessage({room: {name: '#NEXO'}})
  }

  messageHandler ({action, payload}) {
    if (typeof this[action] === "function") this[action](payload)
    else {
      console.log(`Missing action method handler in class implementation ${action}`)
    }
  }
}

module.exports = SocketHandlerInstance
