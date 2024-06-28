import React from 'react';

interface PostProps {
  title: string;
  datetime: string;
  onClick: () => void;
}

const Post: React.FC<PostProps> = ({ title, datetime, onClick}) => {
  return (
    <div className="d-flex flex-column align-items-start mb-3 border rounded-1 p-3">
      <div className="text-secondary" >Created on: {datetime}</div>
      <p className="fw-medium">{title}</p>
      <button className="btn btn-secondary" onClick={onClick}>Show More</button>
    </div>
  );
};

export default Post;