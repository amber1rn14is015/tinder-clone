import React, { useState } from 'react'
import './ChatScreen.css'
import { Avatar } from '@material-ui/core'

const ChatScreen = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      name: 'Ellen',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTS4oTSz7y4Bk4PpgFdkBLFcBVacEOv3KhuGQ&usqp=CAU',
      message: 'Whats up?'
    },
    {
      name: 'Ellen',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTS4oTSz7y4Bk4PpgFdkBLFcBVacEOv3KhuGQ&usqp=CAU',
      message: 'Hows it going?'
    },
    {
      message: 'Hey there!'
    }
  ])

  const handleSend = (e) => {
    e.preventDefault()
    setMessages([...messages, {message: input}])
    setInput('')
  }

  return(
    <div className="chatScreen">
        <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 10/08/20</p>
        {messages.map(message =>
            message.name ? (
              <div key={message.message} className="chatScreen__message">
                <Avatar src={message.image} alt={message.name} />
                <p className="chatScreen__text">{message.message}</p>
              </div>
            ):(
              <div key={message.message} className="chatScreen__message">
                <p className="chatScreen__textUser">{message.message}</p>
              </div>
            )
        )}
        <form className="chatScreen__input">
          <input
            placeholder="Type a message"
            className="chatScreen__inputField"
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button onClick={handleSend} className="chatScreen__inputButton">SEND</button>
        </form>
    </div>
  )
}

export default ChatScreen