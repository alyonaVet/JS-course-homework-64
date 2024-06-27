import React, { ChangeEvent, useState } from 'react';
import { PostType } from '../../types';
import { useNavigate } from 'react-router-dom';
import AddMessageForm from '../../components/AddMessageForm/AddMessageForm';
import axiosApi from '../../axiosApi';
import Spinner from '../../components/Spinner/Spinner';

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
    };

    try {
      await axiosApi.post('/posts.json', newPost);
    } finally {
      setIsLoading(false);
      navigate('/');
    }
  };

  let form = (
    <AddMessageForm
      post={post}
      onFieldChange={onFieldChange}
      onFormSubmit={onFormSubmit}
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
