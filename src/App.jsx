
import Layout from "./components/layout/Layout"
import Router from "./components/router/Router"
import { useEffect, useState } from "react";
import "swiper/css";
import Loader from "./components/loader/Loader";
import "lightgallery.js/dist/css/lightgallery.css";
import { createContext } from "react";
import $ from 'jquery';
export const ThemeContext = createContext(null);
function App() {


  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
   
    setTimeout(() => {
      $(".sitelaoder").addClass("hid")
    }, 3000);
  }, [])



  return (
    <>
      <Loader />
      <Layout >
        <Router  />
      </Layout>

    </>
  )
}

export default App
