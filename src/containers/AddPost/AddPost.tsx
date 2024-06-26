import React from 'react';
import AddMessageForm from '../../components/AddMessageForm/AddMessageForm';
import {PostType} from '../../types';

interface AddPostProps {
  onCreate: (post: PostType) => void;
}

const AddPost: React.FC<AddPostProps> = ({onCreate}) => {
  return (
    <>
      <AddMessageForm onSubmit={onCreate} />
    </>
  );
};

export default AddPost;