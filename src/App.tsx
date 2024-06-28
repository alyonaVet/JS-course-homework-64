import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import Posts from './containers/Posts/Posts';
import {Route, Routes} from 'react-router-dom';
import AddPost from './containers/AddPost/AddPost';
import PostPage from './containers/PostPage/PostPage';
import EditPost from './containers/EditPost/EditPost';
import About from './containers/About/About';
import Contacts from './containers/Contacts/Contacts';

const App = () => {

  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Posts />}/>
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/posts/:id/edit" element={<EditPost />} />
          <Route path="/posts/add" element={<AddPost />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
