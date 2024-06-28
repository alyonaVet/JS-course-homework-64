import {useCallback, useEffect, useState} from 'react';
import {ApiFullPostType, PostData} from '../../types';
import Post from '../../components/Post/Post';
import axiosApi from '../../axiosApi';
import {useNavigate} from 'react-router-dom';


const Posts = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  const navigate = useNavigate();


  const fetchPosts = useCallback(async () => {
    try {
      const {data: posts} = await axiosApi.get<ApiFullPostType>('/posts.json');
      if (posts) {
        const allPosts = Object.keys(posts).map(postId => ({
          id: postId,
          ...posts[postId].post,
          datetime: posts[postId].datetime,
        }));

        setPosts(allPosts);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  }, []);

  useEffect(() => {
    void fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="container mt-5">
      {posts.length > 0 ? (
        posts.map((post: PostData) => (
          <Post
            key={post.id}
            title={post.title}
            datetime={post.datetime}
            onClick={() => navigate(`/posts/${post.id}`)}/>
        ))
      ) : (
        <div className="text-center">
          <p className="fs-4 text-secondary">Nothing posted yet!</p>
        </div>
      )}
    </div>
  );
};

export default Posts;