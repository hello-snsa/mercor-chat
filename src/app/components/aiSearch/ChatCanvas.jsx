import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { t } from 'i18next';

import CandidateCard from './CandidateCard';
import getToken from '../../../utils/getToken';
import { ChatHero, UserDp } from '../../../assets/images'
import { BASE_URL, CHAT_HISTORY } from '../../../utils/apiConstants';
import toast from '../../../utils/toast';

export default function ChatCanvas({ userQuery, messages, setMessages,isLoading, setIsLoading }) {
  const bottomRef = useRef(null);

  const [chatData, setChatData] = useState([]);

  const getChatHistory = async () => {
    setIsLoading(true);
    try {
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
      setChatData(response?.data)
    } catch (error) {
      if (error.response.status === 401) {
        getToken(getChatHistory);
    setIsLoading(true);
      }
      else {
        toast(t("somethingWentWrong"), "error")
      }
    }finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (chatData?.length <= 0) return;
    setMessages(prev => {
      return [...prev, {
        "candidates": chatData?.candidates || [],
        "bot_message": chatData?.bot_message || "",
      }]
    })
  }, [chatData])

  useEffect(() => {
    userQuery && bottomRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages])

  useEffect(() => {
    userQuery && getChatHistory();
    setIsLoading(true);
  }, [userQuery])

  return (
    <div className='chatCanvas'>
      <ToastContainer />
      {messages?.length <= 0 ?
        <>
          <img src={ChatHero} alt={t('chatHeroAlt')}
            className='chatCanvas_hero' />
          <div className={'chatHeader'}>
            <h2>{t('chatIntoHeader')}</h2>
            <p>{t('chatIntro')}</p>
            <p>{t('chatIntro2')}</p>
          </div>
        </>
        : null
      }
      <div className='chatCanvas_chatContainer'>
        {
          messages?.map((message, index) => {
            return (
              <div key={index} className='chatCanvas_message'>
                {message?.senderText ? <div className='chatCanvas_message_sender'>
                  <div className='chatCanvas_message_sender_text'>
                    <p>{message?.senderText}</p>
                  </div>
                  <img src={UserDp} alt="candidate profile" />
                </div> : null}
                {isLoading && <div className='msg-loader' />}
                {
                  message.candidates?.map((candidate, index) => {
                    return (
                      <CandidateCard key={index} candidateData={candidate} />
                    )
                  })
                }
                {message?.bot_message ? <div className='chatCanvas_message_bot'>
                  <img src="https://team.mercor.com/icon.svg" alt="Mercor" />
                  <div className='chatCanvas_message_bot_text'>
                    <p>{message?.bot_message}</p></div>
                </div> : null}
              </div>
            )
          })
        }
        <div ref={bottomRef} />

      </div>
    </div>
  )
}

ChatCanvas.propTypes = {
  userQuery: PropTypes.string,
  messages: PropTypes.array,
  setMessages: PropTypes.func
}
