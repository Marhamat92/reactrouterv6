//!in this file we will define all the routes for our application with their respective components and layouts,and also we will define the nested routes here as children of the parent routes

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


const routes = [
  {
    path: '/',
    element: <GeneralLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'contact', element: <ContactPage /> },
      {
        path: 'blog', element: <BlogLayout />, children: [
          { path: '/', element: <Blog /> },
          { path: 'categories', element: <Categories /> },
          { path: 'post/:url/:id', element: <Post /> },
          { path: '*', element: <ErrorPage /> },
        ]
      },
      {
        path: 'profile',
        element: <PrivateRoute><ProfilePage /></PrivateRoute>
      },
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <LoginPage />
          }
        ]
      },
      {
        path: '*',
        element: <GeneralErrorPage />
      }
    ]
  }
];

export default routes;