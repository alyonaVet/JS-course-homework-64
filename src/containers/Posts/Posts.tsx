import React from 'react';
import {PostType} from '../../types';
import Post from '../../components/Post/Post';

interface PostsProps {
  posts: PostType[];
}

const Posts: React.FC<PostsProps> = ({posts}) => {

  return (
    <div className="container mt-5">
      {posts.map((post: PostType) => (
        <Post key={post.id} title={post.title} datetime={post.datetime} message={post.message} />
      ))}
    </div>
  );
};

export default Posts;