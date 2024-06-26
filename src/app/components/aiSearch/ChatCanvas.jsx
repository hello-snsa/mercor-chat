import { useEffect, useRef, useState } from 'react'

import { ChatHero } from '../../../assets/images'
import { BASE_URL, CHAT_HISTORY, TOKEN_URL } from '../../../utils/apiConstants';
import axios from 'axios';
import CandidateCard from './CandidateCard';
import getToken from '../../../utils/getToken';

export default function ChatCanvas({ userQuery }) {
  const bottomRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [chatData, setChatData] = useState([]);

  const getChatHistory = async () => {
    try {
      console.log("json token", localStorage.getItem('MercorUserToken'));
      // fetch chat history from API
      const response = await axios.post(`${BASE_URL}${CHAT_HISTORY}`,
        {
          "input": userQuery,
          "chat_history": chatData?.chat_history || [],
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

      console.log("response of chat===>", response);
      setChatData(response?.data)
    } catch (error) {
      console.log(error);
      //TODO: add a toast message.
      if (error.response.status === 401) {
        getToken(getChatHistory);
      }
    }
  }

  useEffect(() => {
    if (chatData?.length <= 0) return;
    setMessages(prev => {
      return [...prev, {
        "senderText": userQuery || "",
        "candidates": chatData?.candidates || [],
        "bot_message": chatData?.bot_message || "",
      }]

    })
  }, [chatData])

  console.log("messages==>", messages);

  useEffect(() => {
    userQuery !== "" && bottomRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages])

  useEffect(() => {
    userQuery !== "" && getChatHistory();
  }, [userQuery])

  console.log("chatData", chatData);
  return (
    <div className='chatCanvas'>
      {messages?.length <= 0 ?
        <>
          <img src={ChatHero} alt='Purple banner showing world map with dots and also a man sitting on chair working with his laptop and few books are also stacked on table.'
            className='chatCanvas_hero' />
          {/* <div className='chatCanvas_message'>
        <div className='chatCanvas_message_sender'>AI</div>
      <div className='chatCanvas_message_text'>Hello! How can I help you today?</div> 
       </div>  */}
        </>
        : null
      }
      <div className='chatCanvas_chatContainer' id="chatCanvas_chatContainer">
        {
          messages?.map((message, index) => {
            return (
              <div key={index} className='chatCanvas_message'>
                <div className='chatCanvas_message_sender'>
                  <div className='chatCanvas_message_sender_text'>
                    <p>{message.senderText}</p>
                  </div>
                  <img src="https://lh3.googleusercontent.com/a/ACg8ocLXUWQv3D9F013mzRh5cpiLR3Alib4jCwzj1Tg_VbowdNtExnyq=s96-c" alt="candidate profile" />
                </div>
                {
                  message.candidates?.map((candidate, index) => {
                    return (
                      <CandidateCard key={index} candidateData={candidate} />
                    )
                  })
                }
                <div className='chatCanvas_message_bot'>
                  <img src="https://team.mercor.com/icon.svg" alt="Mercor" />
                  <div className='chatCanvas_message_bot_text'>
                    <p>{message.bot_message}</p></div>
                </div>
              </div>
            )
          })
        }
        <div ref={bottomRef} />

      </div>
    </div>
  )
}
