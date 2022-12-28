import logo from './logo.svg';
import './App.css';
import { NavLink, Link, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';

import Categories from './pages/BlogPage/Categories';
import Post from './pages/BlogPage/Post';
import Blog from './pages/BlogPage/Blog';
import ProfilePage from './pages/Profile/ProfilePage';
import BlogLayout from './pages/BlogPage';
import ErrorPage from './pages/BlogPage/ErrorPage'; //! we use this under blog pages to show error page
import GeneralErrorPage from './pages/GeneralErrorPage'; //!we use this to show error page for all pages
import PrivateRoute from './components/PrivateRoute';
import AuthLayout from './pages/Auth/AuthLayout';
import LoginPage from './pages/Auth/LoginPage';
import GeneralLayout from './pages/GeneralLayout';


//!we use <Outlet /> to render the child components of the parent component,that is for nested routes,otherwise it is not possible to show nested routes

//!in post we use useParams to get the url parameter from the url,and you can do :id or :url or :id/:url or :url/:id or -id or -url or -id/-url or -url/-id etc..

function App() {
  return (
    <div className="grid grid-cols-6">


      <div className='col-span-5'>
        <Routes>
          <Route path="/" element={<GeneralLayout />} >
            <Route index={true} element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="blog" element={<BlogLayout />} >
              <Route index={true} element={<Blog />} />
              <Route path="categories" element={<Categories />} />
              <Route path="post/:url/:id" element={<Post />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Route>
          <Route path="/auth" element={<AuthLayout />} >
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
          <Route path="*" element={<GeneralErrorPage />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
