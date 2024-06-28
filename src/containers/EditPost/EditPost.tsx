import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {PostType} from '../../types';
import {useNavigate, useParams} from 'react-router-dom';
import axiosApi from '../../axiosApi';
import MessageForm from '../../components/MessageForm/MessageForm';
import Spinner from '../../components/Spinner/Spinner';

const EditPost = () => {
  const [post, setPost] = useState<PostType>({
    title: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const onFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fetchPost = useCallback(async () => {
    try {
      const {data: post} = await axiosApi.get(`/posts/${id}.json`);

      setPost(post.post);

    } catch (error) {
      console.error('Network error:', error);
    }
  }, []);

  useEffect(() => {
    void fetchPost();
  }, [fetchPost]);

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    const editedPost = {
      post,
      datetime: new Date().toLocaleString('ru-RU'),
    };

    try {
      await axiosApi.put(`/posts/${id}.json`, editedPost);
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
      <h4>Edit post</h4>
      {form}
    </div>
  );
};

export default EditPost;