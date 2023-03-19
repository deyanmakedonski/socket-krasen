import {MessageItem} from "./components/MessageItem";
import {useSocket} from "./context/socket";

const App = () => {
  const {sendMessage} = useSocket()
  return (
    <div className="flex flex-1 flex-col">
      <div className="messages-container">
        <MessageItem message={{sender: 'Petko', body: 'Kur here!'}} />
        <MessageItem message={{sender: 'Petko', body: 'Kur here!', isMe: true}} />
        <MessageItem message={{sender: 'Petko', body: 'Kur here!'}} />
      </div>
      <div className="message-input-container">
        <textarea></textarea>
        <div
          onClick={() => sendMessage('Some text here!')}
          className="button">
          Send
        </div>
      </div>
    </div>
  )
}

export default App;
