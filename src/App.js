import React, { useEffect, useState } from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";

const App = () => {
  const [courses,setCourses]=useState(null);
  const [loading,setLoading]=useState(true);
  const [category, setCategory]=useState(filterData[0].title);
  async function fetchData()
    {
      setLoading(true);
      try{
        const res=await fetch(apiUrl);
        const output=await res.json();
        setCourses(output.data);
      }
      catch(error)
      {
        toast.error("Something went wrong");
      }
      setLoading(false);
    }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2 pb-8">
      <div>
        <Navbar />
      </div>

      <div>
        <div>
          <Filter filterData={filterData} setCategory={setCategory} category={category} />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading? (<Spinner/>):(<Cards courses={courses} category={category} />)
          }
        </div>
      </div>
    </div>
  );
};

export default App;
