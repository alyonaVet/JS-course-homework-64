import React, { ChangeEvent, useState } from 'react';
import { PostType } from '../../types';
import { useNavigate } from 'react-router-dom';
import axiosApi from '../../axiosApi';
import Spinner from '../../components/Spinner/Spinner';
import MessageForm from '../../components/MessageForm/MessageForm';

const AddPost = () => {
  const [post, setPost] = useState<PostType>({
    title: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const newPost = {
      post,
      datetime: new Date().toLocaleString('ru-RU'),
    };

    try {
      await axiosApi.post('/posts.json', newPost);
    } finally {
      setIsLoading(false);
      navigate('/');
    }
  };

  let form = (
    <MessageForm
      post={post}
      onFormSubmit={onFormSubmit}
      onFieldChange={onFieldChange}
    />
  );

  if (isLoading) {
    form = <Spinner />;
  }

  return (
    <div className="container mt-3">
      <h4>Add new post</h4>
      {form}
    </div>
  );
};

export default AddPost;
