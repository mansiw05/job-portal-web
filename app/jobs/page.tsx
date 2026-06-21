'use client';

import { SearchX } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { jobs } from "../data/jobs";
import JobCard from "../components/JobCard";
import { useState, useEffect, Suspense } from "react";

type Job = {
  id: string | number;
  title: string;
  company: string;
  location: string;
  salary: string;
  category: string;
  type: string;
  workMode: string;
};

function JobsContent() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const searchQuery = searchParams.get("search");
  const companyQuery = searchParams.get("company");

  const [postedJobs, setPostedJobs] = useState<Job[]>([]);
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState(searchQuery || "");

  useEffect(() => {
    const jobsFromStorage: Job[] = JSON.parse(
      localStorage.getItem("PostedJobs") ?? "[]"
    );

    setPostedJobs(jobsFromStorage);
  }, []);

  useEffect(() => {
    const jobs: Job[] = JSON.parse(
      localStorage.getItem("savedJobs") ?? "[]"
    );

    setSavedJobs(jobs);
  }, []);

  const allJobs = [...jobs, ...postedJobs];

  const categoryJobs = category
    ? allJobs.filter((job) => job.category === category)
    : allJobs;

  const companyJobs = companyQuery
    ? categoryJobs.filter((job) => job.company === companyQuery)
    : categoryJobs;

  const filteredJobs = companyJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
  );

  function handleSave(job: Job) {
    const saved: Job[] = JSON.parse(
      localStorage.getItem("savedJobs") ?? "[]"
    );

    const alreadySaved = saved.some((item) => item.id === job.id);

    let updated: Job[];

    if (alreadySaved) {
      updated = saved.filter((item) => item.id !== job.id);
    } else {
      updated = [...saved, job];
    }

    setSavedJobs(updated);
    localStorage.setItem("savedJobs", JSON.stringify(updated));
  }

  return (
    <div className="container mx-auto max-w-screen-xl py-20 px-5">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Find Your Next Opportunity
      </h1>

      <p className="text-gray-600 mb-8 text-center">
        Explore job opportunities from top companies and take the next
        step in your career journey.
      </p>

      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search jobs here..."
          className="rounded-xl border border-gray-300 py-2 px-4 w-full outline-none focus:border-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {category && (
        <p className="text-center text-blue-600 mb-3">
          Showing jobs for : {category}
        </p>
      )}

      <p className="text-center text-gray-500 mb-8">
        {filteredJobs.length} Jobs Found
      </p>

      {filteredJobs.length === 0 ? (
        <div className="text-center py-20">
          <SearchX
            className="mx-auto mb-4 text-gray-400"
            size={60}
          />

          <h2 className="text-3xl font-semibold mb-3">
            No Jobs Found
          </h2>

          <p className="text-gray-500">
            Try searching with different keywords.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJobs.map((ele) => (
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
              onSave={() => handleSave(ele)}
              isSaved={savedJobs.some(
                (item) => item.id === ele.id
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function JobsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JobsContent />
    </Suspense>
  );
}