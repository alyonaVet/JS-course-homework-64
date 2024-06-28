import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {FullPostType} from '../../types';
import FullPost from '../../components/Post/FullPost';
import axiosApi from '../../axiosApi';

const PostPage: React.FC = () => {
  const [post, setPost] = useState<FullPostType | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();


  const fetchOnePost = useCallback(async () => {
    try {
      const { data } = await axiosApi.get<FullPostType>(`/posts/${id}.json`);
      if (data) {
        setPost(data);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  }, [id]);

  const deletePost = async () => {
    try {
      await axiosApi.delete(`/posts/${id}.json`);
    } finally {
      navigate('/');
    }
  };

  const editPost = () => {
    navigate(`/posts/${id}/edit`);
  };

  useEffect(() => {
    void fetchOnePost();
  }, [fetchOnePost]);

  return (
    <div className="container mt-3">
      {post && (
        <FullPost post={post} onEdit={editPost} onDelete={() => deletePost()} />
      )}
    </div>
  );
};

export default PostPage;
