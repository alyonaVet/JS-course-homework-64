export interface PostData {
  id: string;
  title: string;
  datetime: string;
  message: string;
}
export interface PostType {
  title: string;
  message: string;
}

export interface FullPostType {
  datetime: string;
  post: {
    title: string;
    message: string;
  };
}

export interface ApiFullPostType {
  [key: string]: {
    datetime: string;
    post: {
      title: string;
      message: string;
    };
  };
}