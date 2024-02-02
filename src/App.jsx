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
import { About } from "./routes/About";
import { Projects } from "./routes/Projects";
import { ProjectArticle } from "./routes/ProjectArticle";

const router = createHashRouter(createRoutesFromElements([
  <Route path="/" element={<Root />}>
    <Route index element={<About />} />
    <Route path="projects" element={<Projects />} />
    <Route path="projects/:id" element={<ProjectArticle />} />
  </Route>
]
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;
