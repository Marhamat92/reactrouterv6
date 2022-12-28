import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';



//!we use <Outlet /> to render the child components of the parent component,that is for nested routes,otherwise it is not possible to show nested routes

//!in post we use useParams to get the url parameter from the url,and you can do :id or :url or :id/:url or :url/:id or -id or -url or -id/-url or -url/-id etc..

function App() {





  return useRoutes(routes) //we use this to render the routes from routes.js file instead of writing them here
}

export default App;
