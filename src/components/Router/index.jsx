import React, { useEffect } from 'react'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Services from '../../pages/Services'
import Projects from '../../pages/Projects'
import ProjectSingle from '../../pages/ProjectSingle'
import Certificats from '../../pages/Certificats'
import Contact from '../../pages/Contact'
import { useRoutes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadposts } from '../store/posts'

const Router = () => {

    const dispatch =useDispatch();
    const data =useSelector((state) =>state.list);

    useEffect(()=>{
        dispatch(loadposts())
    },[dispatch])

    console.log(data)
    
    const minirouter =[
        {
            path:'/',
            element: <Home data={data} />,
            exact:true,
        },
        {
            path:'/about',
            element: <About />,
        },
        {
            path:'/services',
            element: <Services />, 
        },
        {
            path:'/projects',
            element: <Projects />,
        },
        {
            path:'/projects/:slug_az',
            element: <ProjectSingle />,
        },
        {
            path:'/certificats',
            element: <Certificats />,
        },
        {
            path:'/contact',
            element: <Contact />,
        },
    ]
    const router =useRoutes(minirouter)
    return <>{router}</>
}

export default Router
