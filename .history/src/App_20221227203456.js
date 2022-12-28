import logo from './logo.svg';
import './App.css';
import { NavLink, Link, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';

import Categories from './pages/BlogPage/Categories';
import Post from './pages/BlogPage/Post';
import Blog from './pages/BlogPage/Blog';
import BlogLayout from './pages/BlogPage';
import ErrorPage from './pages/BlogPage/ErrorPage'; //! we use this under blog pages to show error page
import GeneralErrorPage from './pages/GeneralErrorPage'; //!we use this to show error page for all pages

//!we use <Outlet /> to render the child components of the parent component,that is for nested routes,otherwise it is not possible to show nested routes

//!in post we use useParams to get the url parameter from the url,and you can do :id or :url or :id/:url or :url/:id or -id or -url or -id/-url or -url/-id etc..

function App() {
  return (
    <div className="grid grid-cols-6">
      <div className='col-span-1'>
        <nav>
          <li>
            <NavLink to="/" end>Home</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="blog">Blogs</NavLink>
          </li>
        </nav>
      </div>

      <div className='col-span-5'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="blog" element={<BlogLayout />} >
            <Route index={true} element={<Blog />} />
            <Route path="categories" element={<Categories />} />
            <Route path="post/:url/:id" element={<Post />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<GeneralErrorPage />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
