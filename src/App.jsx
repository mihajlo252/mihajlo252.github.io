import React from "react";

import {
    Route,
    RouterProvider,
    createHashRouter,
    createRoutesFromElements,
} from "react-router-dom";

// Layout
import { Root } from "./layout/Root";

// Routes
import { Blog } from "./routes/Blog";
import { About } from "./routes/About";
import { BlogArticle } from "./routes/BlogArticle";

const router = createHashRouter(createRoutesFromElements([
  <Route path="/" element={<Root />}>
    <Route index element={<About />} />
    <Route path="blog" element={<Blog />} />
    <Route path="blog/:id" element={<BlogArticle />} />
  </Route>
]
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;
