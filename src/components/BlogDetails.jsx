import React from "react";
import { NavLink } from "react-router-dom";
const BlogDetails = ({ post }) => {

  let defaultImage='https://imageio.forbes.com/specials-images/imageserve/642d19d5da2c76162a392965/0x0.jpg?format=jpg&amp;width=1200'

  
  return (
      <div className="text-gray-600 px-5 py-24 w-[280%] -ml-[4] ">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                src={post.urlToImage ?? defaultImage}
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                loading="lazy"
                height={720}
                width={400}
              />
              <div className="p-6">
                <NavLink to={`/everything/${post.title}.replaceAll(" ","-")`}>
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {post.title}
                  </h2>
                </NavLink>
                <div>
                  By
                  <span>{post.author}</span>
                  on{" "}
                  <NavLink
                    to={`/everything/${post.source.name}.replaceAll(" ","-")`}
                  >
                    <p className="title-font text-lg font-medium text-gray-900 mb-3">
                      {post.source.name}
                    </p>
                  </NavLink>
                </div>
                <p className="leading-relaxed mb-3">
                  {" "}
                  Posted on {post.publishedAt}{" "}
                </p>
                <p className="leading-relaxed mb-3">
                  {" "}
                  Description: {post.description}{" "}
                </p>
                <p className="leading-relaxed mb-3"> Content: {post.content}</p>
                <div>
                  {/* {post.tags.map( (tag, index) => ( */}
                  <p className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    For More Details{" "}
                  </p>
                  <a
                    href={post.url}
                    target="_blank"
                    className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Click here for more details
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  {/* ) )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default BlogDetails;
