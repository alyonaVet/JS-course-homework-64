import {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {FullPostType} from '../../types';
import FullPost from '../../components/Post/FullPost';
import axiosApi from '../../axiosApi';

const PostPage = () => {
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

  useEffect(() => {
    void fetchOnePost();
  }, [fetchOnePost]);

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

  const onClose = () => {
    navigate(`/`);
  };

  return (
    <div className="container mt-3">
      {post && (
        <FullPost post={post} onEdit={editPost} onDelete={() => deletePost()} onClose={onClose} />
      )}
    </div>
  );
};

export default PostPage;
