import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NewsUrlEverything } from "../NewsUrl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const navigate = useNavigate();
  const apiKeyy='e7676b3ba640411484b99bb2b0fa6f7b;
  // Fetch Blog Data
const fetchBlogPosts = async (pagecountry, tag, everything=false, topHeadline=false, mainPage=true) => {
    setLoading(true);
    let url = `https://newsapi.org/v2/everything?q=${tag}&apiKey=${apiKeyy}`;
    console.log("everything-topheadline",everything,topHeadline)
    if(everything) {
      console.log("everything-Appcontext");
      url = `https://newsapi.org/v2/everything?q=${tag}&apiKey=${apiKeyy}`;
    }
    else if(topHeadline) {
      console.log('topHeadline',pagecountry)
      url = `https://newsapi.org/v2/top-headlines?country=${pagecountry}&apiKey=${apiKeyy}`;
    }
    else {
      console.log('mainCountry',mainPage);

      url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKeyy}`;
    }
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("API Response", data); // Log the entire response object to see what is being returned
      if (!data.articles || data.articles.length === 0) {
        throw new Error("Something Went Wrong");
      }
      setPage(1);
      setPosts(data.articles);
      setTotalPages(1);
    } catch (error) {
      console.log("aa gye")
      console.log("Error in Fetching BlogPosts", error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  };
  
  

  // Handle When Next and Previous button are clicked
  const handlePageChange = (page) => {
    // navigate( { search: `?page=${page}`});
    // setPage(page);
  };

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
