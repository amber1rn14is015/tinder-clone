import React from 'react'
import Chat from './Chat'
import './Chats.css'

const Chats = () => {
  return(
    <div className="chats">
      <Chat 
        name="Mark"
        message="Hello there!"
        timestamp="40 seconds ago"
        profilePic="https://texasbarblog.lexblogplatformtwo.com/files/2011/12/housto-bankruptcy-attorney-adam-schachter1.jpg"
      />
      <Chat 
        name="Sara"
        message="Hi!"
        timestamp="50 minutes ago"
        profilePic="https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg"
      />
      <Chat 
        name="Amber"
        message="Are you there?"
        timestamp="20 seconds ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRslTodHTAo58OYUw1tVozFFBU6XeDazE62ig&usqp=CAU"
      />
      <Chat 
        name="Bill"
        message="I'm good."
        timestamp="20 minutes ago"
        profilePic="https://texasbarblog.lexblogplatformtwo.com/files/2013/01/Zachary-Oliva1.jpg"
      />
      <Chat 
        name="Jeff"
        message="You there?"
        timestamp="30 minutes ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQieiT6uCzfSiKHD-GEB1IMkqrFH_VySMPfA&usqp=CAU"
      />
    </div>
  )
}

export default Chats