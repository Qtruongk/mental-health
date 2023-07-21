import React from "react";
import { useState } from 'react';
import ChatComponent from '../components/ChatComponent';
import "./ChatwAI.css";
const ChatwAI =() =>{
    const API_KEY='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';

  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm C-bot! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });

    //role:"user"->message from the user, "assistant"->a response from CHATGPT
    //"system"-> generally one initial message defining How we want chatgpt to talk

    const systemMessage={
      role:"system",
      content:"Explain like I am a 10 years of experience software engineer."
    }
    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act. 
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,  // The system message DEFINES the logic of our chatGPT
        ...apiMessages // [message1,message2,message3]-The messages from our chat with ChatGPT
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      console.log(data.choices[0].message.content);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setIsTyping(false);
    });
  }  
  return (
    <div>
      <p className="chat-title">Welcome to health assistant</p>
      <ChatComponent
        messages={messages}
        isTyping={isTyping}
        handleSend={handleSend}
      />
    </div>
  );
};
export default ChatwAI;