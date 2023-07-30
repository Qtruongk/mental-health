// PostList.js
import React, { useState } from 'react';
import PostCard from './PostCard';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const posts = [
  {
    id: 1,
    title: 'Tiêu đề bài viết 1',
    summary: 'Tóm tắt bài viết 1',
    topic: 'common',
  },
  {
    id: 2,
    title: 'Tiêu đề bài viết 2',
    summary: 'Tóm tắt bài viết 2',
    topic: 'psy',
  },
  {
    id: 3,
    title: 'Tiêu đề bài viết 3',
    summary: 'Tóm tắt bài viết 3',
    topic: 'marriage',
  },
  {
    id: 4,
    title: 'Tiêu đề bài viết 4',
    summary: 'Tóm tắt bài viết 4',
    topic: 'depression',
  },
  {
    id: 5,
    title: 'Tiêu đề bài viết 5',
    summary: 'Tóm tắt bài viết 5',
    topic: 'facts',
  },
];

const PostList = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  const filteredPosts = selectedTopic
    ? posts.filter((post) => post.topic === selectedTopic)
    : posts;

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <ListContainer>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            onClick={() => handleTopicClick(post.topic)}
          />
        ))}
      </ListContainer>

      {selectedTopic && (
        <div>
          <h2>Danh sách bài viết theo chủ đề: {selectedTopic}</h2>
          {filteredPosts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
