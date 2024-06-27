import React, { ChangeEvent } from 'react';
import { PostType } from '../../types';

interface AddMessageFormProps {
  post: PostType;
  onFieldChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFormSubmit: (event: React.FormEvent) => void;
}

const AddMessageForm: React.FC<AddMessageFormProps> = ({ post, onFieldChange, onFormSubmit}) => {
  return (
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            className="form-control"
            onChange={onFieldChange}
            value={post.title}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            required
            className="form-control"
            onChange={onFieldChange}
            value={post.message}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Save post
        </button>
      </form>
  );
};

export default AddMessageForm;
