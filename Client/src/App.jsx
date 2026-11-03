
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Layout from './Pages/Admin/Layout';
import Dashboard from './Pages/Admin/Dashboard';
import AddBlog from './Pages/Admin/AddBlog';
import ListBlog from './Pages/Admin/ListBlog';
import Comments from './Pages/Admin/Comments';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />

        {/* Admin Routes */}
        <Route path="/Admin" element={<Layout />}>

          <Route index element={<Dashboard />} />
          <Route path="addBlog" element={<AddBlog />} />
          <Route path="listBlog" element={<ListBlog />} />
          <Route path="comments" element={<Comments />} />
          

        </Route>
      </Routes>
    </div>
  );
};

export default App;
