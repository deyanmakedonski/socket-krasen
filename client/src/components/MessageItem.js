export const MessageItem = ({message}) => {
  return (
    <div className={`message-item ${message.isMe ? `message-me` : ''}`}>
      <div className={'message-sender'}>{message.sender}</div>
      <div className={'message-body'}>{message.body}</div>
    </div>
  )
}
