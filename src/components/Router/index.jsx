import React, { useEffect, useState } from "react";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Services from "../../pages/Services";
import Projects from "../../pages/Projects";
import ProjectSingle from "../../pages/ProjectSingle";
import Certificats from "../../pages/Certificats";
import Contact from "../../pages/Contact";
import { useRoutes } from "react-router-dom";



const Router = () => {
 
  const [data, setData] = useState([])
   
    const myurl =`${import.meta.env.VITE_API}fulldata`;
  
    useEffect(() => {
      const getData = () => {
        fetch(myurl)
          .then(response => response.json())
          .then(data => setData(data))
          .catch(err => console.log(err))
      }
      getData()
  
    }, [])
    console.log(data)

  const minirouter = [
    {
      path: "/",
      element: <Home data={data} />,
      exact: true,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/projects/:slug_az",
      element: <ProjectSingle />,
    },
    {
      path: "/certificats",
      element: <Certificats />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ];
  const router = useRoutes(minirouter);
  return <>{router}</>;
};

export default Router;
