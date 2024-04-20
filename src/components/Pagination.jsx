import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  if (!totalPages) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border-t-gray-300">
      <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="border-2 border-gray-300 py-1 px-4 rounded-md"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="border-2 border-gray-300 py-1 px-4 rounded-md"
          >
            Next
          </button>
        )}
        <div className=" w-screen flex flex-row justify-evenly">
          <a href="https://github.com/nikhilfullstack/" className="animate-pulse font-serif text-indigo-600">Github</a>
          <a href="https://linkedin.com/in/nikhilfullstack/" className="animate-pulse font-serif text-indigo-600">LinkedIn</a>
          <a href="https://portfolio-nikhil-fullstack.vercel.app/ "className="animate-pulse font-serif text-indigo-600">Portfolio</a>

        </div>
      </div>
    </div>
  );
}
