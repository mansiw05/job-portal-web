'use client';
import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import { jobs } from "../data/jobs";
export default function Feturedjobs(){
  const [savedJobs, setSavedJobs] = useState<{ id: string | number }[]>([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("savedJobs") || "[]") as { id: string | number }[];
    setSavedJobs(data);
  }, []);
  
    return(
        <div className="py-20 px-5 container mx-auto w-full max-w-screen-xl">
            <h2 className="text-3xl font-bold mb-4 text-center">Featured Jobs</h2>
            <p className="text-gray-600 text-center mb-8">
  Browse featured opportunities from trusted employers and take the next step in your career.
</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{
                jobs.slice(0,6).map((ele)=>(
                    <JobCard key={ele.id} title={ele.title} company={ele.company} location={ele.location} salary={ele.salary} category={ele.category} jobType={ele.type} mode={ele.workMode} id ={ele.id}  isSaved ={savedJobs.some((item) => item.id === ele.id)} />
                ))
}
            </div>
        </div>
    )
}