// PostCard.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const PostCard = ({ title, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <Title>{title}</Title>
    </CardContainer>
  );
};

export default PostCard;
