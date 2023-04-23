import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

import { Route, Routes, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import TopHeadlinesPage from "./Pages/TopHeadlinesPage";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    
    // const question =searchParams.get("q")

    
    console.log(location.pathname);
    console.log(location.pathname.includes("top-headlines"),location.pathname.includes("ca"));
     if(location.pathname.includes("everything")) {
      //iska matlab tag wala page show krna h 
      // const urlParams = new URLSearchParams(window.location.search);
      const tag = location.pathname.split("/").at(-1);
      // const county = urlParams.get('mode');
      console.log("appjs everything tag",tag)
      fetchBlogPosts( null,tag,true,false,false);
    }
    else if(location.pathname.includes("top-headlines") && location.pathname.includes("IN")) {
      let pagecountry='in';
      let mainPage=false;
      let topHeadline=true;
      fetchBlogPosts('in',null,false,true,false );
    }
    else if(location.pathname.includes("top-headlines") && location.pathname.includes("US")) {
      let mainPage=false;
      let pagecountry='us';
      let topHeadline=true;
      fetchBlogPosts('us',null,false,true,false );
    }
    else if(location.pathname.includes("top-headlines") && location.pathname.includes("CA")) {
      fetchBlogPosts('ca',null,false,true,false );
    }
    else if(location.pathname.includes("top-headlines") && location.pathname.includes("FR")) {
      let mainPage=false;
      let pagecountry='fr';
      console.log("topheadlineFR");
      let topHeadline=true;
      fetchBlogPosts('fr',null,false,true,false );
    }
    else if(location.pathname.includes("top-headlines") && location.pathname.includes("JP")) {
      let mainPage=false;
      let pagecountry='jp';
      let topHeadline=true;
      console.log("topheadlineJP");
      fetchBlogPosts('jp',null,false,true,false );
    }
    else if(location.pathname.includes("top-headlines") && location.pathname.includes("DE")) {
      let pagecountry='de';
      let mainPage=false;
      let topHeadline=true;
      fetchBlogPosts('de',null,false,true,false );
    }
    // else if(location.pathname.includes("categories")) {
    //   const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
    //   fetchBlogPosts(Number(page), null, category);
    // }
    else {
      let mainPage=true;
      fetchBlogPosts();
    }
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route path="/" element = {<Home/>}   />
      <Route path="/everything/:search" element = {
      // <BlogPage/>
        // <EverythingPage/>} 
        <Home />}  />
      <Route path="/top-headlines/IN/" element = {
      // <TagPage/>
        <TopHeadlinesPage/>}   />
      <Route path="/top-headlines/US/" element = {
      // <TagPage/>
        <TopHeadlinesPage/>}   />
      <Route path="/top-headlines/CA/" element = {
      // <TagPage/>
        <TopHeadlinesPage/>}   />
      <Route path="/top-headlines/FR/" element = {
      // <TagPage/>
        <TopHeadlinesPage/>}   />
      <Route path="/top-headlines/JP/" element = {
      // <TagPage/>
        <TopHeadlinesPage/>}   />
      <Route path="/top-headlines/DE/" element = {
      // <TagPage/>
        <TopHeadlinesPage/>}   />
      
      
    </Routes>
  );
}
