import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';



//!we use <Outlet /> to render the child components of the parent component,that is for nested routes,otherwise it is not possible to show nested routes

//!in post we use useParams to get the url parameter from the url,and you can do :id or :url or :id/:url or :url/:id or -id or -url or -id/-url or -url/-id etc..

function App() {

  const routes = useRoutes(routes)

  console.log(routes, "routes from app");

  return (
    routes
  )
}

export default App;
