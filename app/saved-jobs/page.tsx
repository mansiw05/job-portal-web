'use client';
import JobCard from "../components/JobCard";

import {useState, useEffect } from "react";

interface SavedJob {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  category: string;
  type: string;
  workMode: string;
}

export default function SaveJobsPage(){
    function handleRemove(job: SavedJob) {
  const saved: SavedJob[] =
    JSON.parse(localStorage.getItem("savedJobs") || "[]");

  const updated = saved.filter(
    (item) => item.id !== job.id
  );

  setSaveJobs(updated);

  localStorage.setItem(
    "savedJobs",
    JSON.stringify(updated)
  );
}
    const [saveJobs,setSaveJobs] = useState<SavedJob[]>([]);
    useEffect(()=>{
      const jobs: SavedJob[] = JSON.parse(localStorage.getItem("savedJobs") || "[]");
      setSaveJobs(jobs); 
    },[])
    return(
<div className="mx-auto container max-w-screen-xl py-20 px-5">
<h1 className="text-4xl font-bold mb-10 text-center">Saved Jobs</h1>
{saveJobs.length === 0 ? (
  <div className="text-center py-20">
    <h2 className="text-3xl font-semibold">
      No Saved Jobs Found
    </h2>
    <p className="text-gray-500 mt-2">
      Click bookmark icon to save jobs
    </p>
  </div>
) : (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {saveJobs.map((job) => (
      <JobCard
        key={job.id}
        title={job.title}
        company={job.company}
        location={job.location}
        salary={job.salary}
        category={job.category}
        jobType={job.type}
        mode={job.workMode}
        id={job.id}
        onSave={() => handleRemove(job)}
        isSaved={true}
      />
    ))}
  </div>
)}



</div>  
    )
}