import React from 'react';
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
const ChatComponent = ({ messages, isTyping, handleSend }) => {
  return (
    <div style={{ 
      position:"relative", height: "500px",margin:0 }}>
      <div className='chat-container'>
        <MainContainer>
          <ChatContainer className='chat-container'>
            <MessageList 
              className='message-list'
              scrollBehavior="smooth"
             typingIndicator={
              isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null
              }
            >
              {messages.map((message, i) => {
                console.log(message);
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput className='message-input' placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default ChatComponent;
