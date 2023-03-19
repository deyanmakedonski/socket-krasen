import React, {useContext} from 'react'
import {socket} from './io'

const SocketContext = React.createContext()

export const useSocket = () => {
  return useContext(SocketContext);
};
export const SocketProvider = ({children}) => {

  React.useEffect(() => {
    const onConnect = () => {
      console.log('Connection Open..')
    }

    const onDisconnect = () => {
      console.log('Connection Closed..')
    }

    function onMessage(data) {
      console.log('New Message', data)
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('message', onMessage);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('message', onMessage);
    };
  }, []);

  const sendMessage = (text) => {
    console.log('sending message')
    socket.emit('message', {action: 'message', payload: {sender: socket.id, body: text}})
  }

  return <SocketContext.Provider value={{sendMessage}}>{children}</SocketContext.Provider>
}

