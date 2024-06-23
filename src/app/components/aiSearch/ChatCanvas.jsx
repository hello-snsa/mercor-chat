import {useEffect, useState} from 'react'

import { ChatHero } from '../../../assets/images'
import { BASE_URL, CHAT_HISTORY } from '../../../utils/apiConstants';
import axios from 'axios';

export default function ChatCanvas() {
  const [messages, setMessages] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    setMessages([
      {
        sender: 'AI',
        text: 'Hello! How can I help you today?'
      }
    ])

  
  }, [
    chatHistory
  ])

  const getChatHistory = async() => {
    try{
      console.log("json token",localStorage.getItem('MercorUserToken'));
    // fetch chat history from API
    const response = await axios.post(`${BASE_URL}${CHAT_HISTORY}`,
      {
        "input": "I need a React engineer who can work full-time",
        "chat_history": [],
        "shortlist": [],
        "email": "hello.shahanshah@gmail.com",
        "isWhiteListed": 0
    },
      {
        "headers": {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('MercorUserToken')}`
      },
    })

    console.log("response of chat===>",response);
    // setChatHistory(response.data)
  } catch (error) {
    console.log(error);
  }
  }

  useEffect(() => {
  // getChatHistory();
  }, [])

  console.log("chatHistory", chatHistory);
  return (
    <div className='chatCanvas'>
      {messages?.length <= 0 ?
        <img src={ChatHero} alt='Purple banner showing world map with dots and also a man sitting on chair working with his laptop and few books are also stacked on table.' 
        className='chatCanvas_hero'/>
        :null
      }
      {/* <div className='chatCanvas_message'>
        <div className='chatCanvas_message_sender'>AI</div>
        <div className='chatCanvas_message_text'>Hello! How can I help you today?</div> */}
      {/* </div> */}
    </div>
  )
}
