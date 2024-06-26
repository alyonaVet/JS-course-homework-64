import React, {useState} from 'react';

interface PostProps {
  title: string;
  datetime: string;
  message: string;
}

const Post: React.FC<PostProps> = ({title, datetime, message}) => {
  const [showPostMessage, setShowPostMessage] = useState(false);

  const toggleReadMore = () => {
    setShowPostMessage((prev) => !prev);
  };

  return (
    <div className="d-flex flex-column align-items-start mb-3 border rounded-1 p-3">
      <div className="text-secondary" >Created on: {datetime}</div>
      <p className="fw-medium">{title}</p>
      <button className="btn btn-secondary" onClick={toggleReadMore}>{showPostMessage ? 'Hide message' : 'Show More'}</button>
      {showPostMessage && (
        <div className="mt-3">
            <p className="card-text">{message}</p>
        </div>
      )}
    </div>

  );
};

export default Post;