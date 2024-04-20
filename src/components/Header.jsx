import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";
export default function Header() {
  const [formdata, setformdata] = useState({
    mode: "",
    searchText: "",
  });
  const location = useLocation();
  // const [question, setQuestion] = useState(formdata.searchText);
  // const [formdata,setformdata]=useState( {first:"",last:"",email:""})
  function changehandler(event) {
    const { name, value, checked } = event.target;
    setformdata((prevdata) => {
      return {
        ...prevdata,
        [name]: type === "checkbox" ? checked : value,
        
      };
    });
    submitHandler();
  }
  function submitHandler(event) {
    console.log("finally printing the form");
    console.log(formdata);
  }
  return (
    <header className="py-4 flex flex-col border-b-2 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 bg-white">
      {/* top-headlines/in/:top */}
      <form
      // action={`http://localhost:3000/top-headlines${formdata.mode}/:top`}
      >
        <div className="flex justify-evenly">
          <NavLink to='/'>
            <h1 className="cursor-pointer font-bold text-2xl uppercase text-center font-mono">
            NewsSphere: Your Window to the World
            </h1>
          </NavLink>
          {/* <NavLink to={`/top-headlines/CA/`}>
            <div>
              <button
                className=""
                name="mode"
                type="radio"
                required
                id="radio1"
                value="ca"
                onChange={changehandler}
                checked={formdata.mode === "ca"}
              />
              <label
                className="font-bold hover:text-sky-700 hover:underline cursor-pointer"
                htmlFor="radio1"
              >
                Canada
              </label>
            </div>
          </NavLink> */}


          {/* <NavLink to={"/top-headlines/FR/"}>
            <div>
              <button
                className=""
                name="mode"
                type="radio"
                required
                id="radio2"
                value="fr"
                onChange={changehandler}
                checked={formdata.mode === "fr"}
              />
              <label
                className="font-bold hover:text-sky-700 hover:underline cursor-pointer"
                htmlFor="radio2"
              >
                France
              </label>
            </div>
          </NavLink>


          <NavLink to={"/top-headlines/DE/"}>
            <div>
              <button
                className=""
                name="mode"
                type="radio"
                id="radio3"
                required
                value="de"
                onChange={changehandler}
                checked={formdata.mode === "de"}
              />
              <label
                className="font-bold hover:text-sky-700 hover:underline cursor-pointer"
                htmlFor="radio3"
              >
                Germany
              </label>
            </div>
          </NavLink>

          <NavLink to={"/top-headlines/IN/"}>
            <div>
              <button
                className=""
                name="mode"
                type="radio"
                id="radio4"
                required
                value="in"
                onChange={changehandler}
                checked={formdata.mode === "in"}
              />
              <label
                className="font-bold hover:text-sky-700 hover:underline cursor-pointer"
                htmlFor="radio4"
              >
                India
              </label>
            </div>
          </NavLink>

          <NavLink to={"/top-headlines/JP/"}>
            {" "}
            <div>
              <button
                className=""
                name="mode"
                type="radio"
                id="radio5"
                required
                value="jp"
                onChange={changehandler}
                checked={formdata.mode === "jp"}
              />
              <label
                className="font-bold hover:text-sky-700 hover:underline cursor-pointer"
                htmlFor="radio5"
              >
                Japan
              </label>
            </div>
          </NavLink>

          <NavLink to={"/top-headlines/US/"}>
            <div>
              <button
                className=""
                name="mode"
                type="radio"
                id="radio6"
                value="us"
                required
                onChange={changehandler}
                checked={formdata.mode === "us"}
              />
              <label
                className="font-bold hover:text-sky-700 hover:underline cursor-pointer"
                htmlFor="radio6"
              >
                United States Of America
              </label>
            </div>
          </NavLink> */}
        </div>
      </form>
     
        {/* <form className="flex justify-evenly flex-wrap w-screen">

          <div className="capitalize font-bold text-2xl text-amber-700">{location.pathname.split("/").at(-1).replaceAll("-"," ")}</div>
          <div>          <input
            type="text"
            maxLength="150"
            required
            name="searchText"
            value={formdata.searchText}
            onChange={changehandler}
            className="border-2"
          />
          
          <NavLink to={`/everything/${formdata.searchText.replaceAll(" ","-")}`} ><button
            onSubmit={submitHandler}
            className="translate-x-2 hover:scale-[1.1]"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
            </svg>
          </button></NavLink></div>

          
        </form> */}
    </header>
  );
}
