import React, {ChangeEvent, useState} from 'react';
import {PostType} from '../../types';

interface Props {
  onSubmit: (post: PostType) => void;
}

const AddMessageForm: React.FC<Props> = ({onSubmit}) => {
  const [postData, setPostData] = useState({
    title: '',
    message: '',
  });

  const onFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;

    setPostData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    });
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const post: PostType = {
      ...postData,
      id: Math.random().toString(),
      datetime: Date.now().toLocaleString(),
    }
    onSubmit(post);
    setPostData({
      title: '',
      message: '',
    });
  };

  return (
    <div className="container mt-3">
      <h4>Add new post</h4>
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
            value={postData.title}
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
            value={postData.message}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Save post
        </button>
      </form>
    </div>
  );
};

export default AddMessageForm;