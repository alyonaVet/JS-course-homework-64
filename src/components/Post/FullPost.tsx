import React from 'react';
import {FullPostType} from '../../types';

interface FullPostProps {
  post: FullPostType;
  onEdit: () => void;
  onDelete: () => void;
  onClose: () => void;
}

const FullPost: React.FC<FullPostProps> = ({post, onEdit, onDelete, onClose}) => {
  return (
    <div className="d-flex flex-column align-items-start mb-3 border rounded-1 p-3">
      <div className="text-secondary">Created on: {post.datetime}</div>
      <h4 className="fw-medium my-3">{post.post.title}</h4>
      <p className="mt-2 mb-5">{post.post.message}</p>
      <div className="d-flex">
        <button className="btn btn-info me-3 px-3" onClick={onClose}>Close</button>
        <button className="btn btn-secondary me-3 px-4" onClick={onEdit}>Edit</button>
        <button className="btn btn-danger" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default FullPost;
