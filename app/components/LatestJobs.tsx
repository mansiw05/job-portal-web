import JobCard from "./JobCard";
import { jobs } from "../data/jobs";
export default function LatestJobs() {
return(
    <div className="mx-auto py-20 px-5 container w-full max-w-screen-xl">
        <h2 className="text-3xl font-bold mb-4 text-center">Latest Jobs</h2>
        <p className="text-gray-600 text-center mb-8">
  Discover recently posted jobs and find the perfect role for your career growth.
</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
            jobs.slice(6,12).map((ele)=>(
                <JobCard key={ele.id} title={ele.title} company={ele.company} location={ele.location} salary={ele.salary} category={ele.category} jobType={ele.type} mode={ele.workMode} id={ele.id}  isSaved={false} />
            ))
            }
    </div>
    </div>
)
}
