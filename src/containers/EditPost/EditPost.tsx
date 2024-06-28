import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {PostType} from '../../types';
import {useNavigate, useParams} from 'react-router-dom';
import axiosApi from '../../axiosApi';
import MessageForm from '../../components/MessageForm/MessageForm';

const EditPost = () => {
  const [post, setPost] = useState<PostType>({
    title: '',
    message: '',
  });

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
    const editedPost = {
      post,
      datetime: new Date().toLocaleString('ru-RU'),
    };

    try {
      await axiosApi.put(`/posts/${id}.json`, editedPost);
    } finally {
      navigate('/');
    }
  };

  return (
    <div className="container mt-3">
      <h4>Edit post</h4>
      <MessageForm
        post={post}
        onFieldChange={onFieldChange}
        onFormSubmit={onFormSubmit}
      />
    </div>
  );
};

export default EditPost;