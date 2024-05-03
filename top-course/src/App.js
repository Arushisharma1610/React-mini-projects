import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {apiUrl, filterData } from "./data.js";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";




const App = () => {

  const [courses, setCourses] = useState(null);

  useEffect (() => {
    const fetchData = async() => {
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong");
      }
    } 
    fetchData();
  }, []);

  return (
    <div>
        <Navbar/>

        <Filter 
          filterData = {filterData}
        />

        <Cards courses = {courses}/>
    </div>
  );
};

export default App;


