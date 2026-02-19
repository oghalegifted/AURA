import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mth from './Courses/Mth.jsx'
import Chm from './Courses/Chm.jsx'
import Gst from './Courses/Gst.jsx'
import Bio from './Courses/Bio.jsx'
import Phy from './Courses/Phy.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Comp from './Courses/Comp.jsx'
import Eng from './Courses/Eng.jsx'


const router = createBrowserRouter([
  { path: "/",element: <App /> },
  { path: "/chm",element: <Chm /> },
  { path: "/eng",element: <Eng /> },
  { path: "/comp",element: <Comp /> },
  { path: "/mth",element: <Mth /> },
  { path: "/gst",element: <Gst /> },
  { path: "/bio",element: <Bio /> },
  { path: "/phy",element: <Phy /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
