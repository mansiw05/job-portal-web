'use client';
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  category: string;
  type: string;
  workMode: string;
}

export default function MyPostedJobs() {
  const [postedJobs, setPostedJobs] = useState<Job[]>([]);

  useEffect(() => {
    const storedJobs = localStorage.getItem("PostedJobs");
    const jobs = storedJobs ? (JSON.parse(storedJobs) as Job[]) : [];

    setPostedJobs(jobs);
  }, []);

  function handleDelete(id: string) {
    const updatedJobs = postedJobs.filter((job) => job.id !== id);

    setPostedJobs(updatedJobs);
    localStorage.setItem("PostedJobs", JSON.stringify(updatedJobs));
  }
    return(
    <div className="container mx-auto max-w-screen-xl py-20 px-5">
{
  postedJobs.length === 0 ? (
    <h2>No Posted Jobs</h2>
  ) : (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {postedJobs.map((ele,idx) => (
        <div className="relative" key ={idx}>
        <JobCard
          key={ele.id}
          title={ele.title}
          company={ele.company}
          location={ele.location}
          salary={ele.salary}
          category={ele.category}
          jobType={ele.type}
          mode={ele.workMode}
          id={ele.id}
          isSaved={false}
          onSave={() => {}}
        />
        <button
      onClick={() => handleDelete(ele.id)}
      className="absolute top-9 right-15 text-red-500 cursor-pointer hover:text-red-600"
    >
      <Trash2 size={20} />
     
    </button>
    </div>
        
      ))}
    </div>
  )
}
    </div>
    )
}