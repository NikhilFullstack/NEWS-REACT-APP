import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";

export default function Blogs() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 mt-6 w-screen lg:ml-8">
      {loading ? (
        <div className="lg:min-h-[80vh] w-full p-1 flex justify-center items-center">
          <p className="text-center font-bold text-3xl">Loading</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Blogs Found !</p>
        </div>
      ) : (
        posts.map((post,index) => (
          <BlogDetails key={index} post={post}/>
        ))
      )}
    </div>
  );
}
