import {  Building2, MapPin,Briefcase, IndianRupee,} from "lucide-react";
import { jobs } from "../../data/jobs";
export default async function JobDetail({ params } : {
  params: Promise<{ id: string }>;
}) {
    const { id } =  await params;
const job = jobs.find((job)=> job.id === Number(id));
if(!job){
    return <div>Job not found
     
    </div>
}
    return(
<div className="container mx-auto w-full max-w-screen-xl py-20 px-5">
    <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
     <div className="flex items-center gap-2 text-gray-500 mt-1">
        <Building2 size={18} />
        <span>{job.company}</span>
      </div>
    <div className="flex gap-2 mt-4">
        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
          {job.category}
        </span>
        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
          {job.workMode}
        </span>
      </div>
      <div className="text-gray-600 mt-4 space-y-2">
        <div className="flex items-center gap-2">
          <MapPin size={18} />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase size={18} />
          <span>{job.type}</span>
        </div>
      </div>
    <p className="text-blue-600 font-semibold my-4">
        {job.salary}
      </p>
      <div className="mb-5">
  <h2 className="text-2xl font-semibold mb-3">
    Job Description
  </h2>

  <p className="text-gray-600 ">
    {job.description}
  </p>
</div>
<div className="mb-8">
  <h2 className="text-2xl font-semibold mb-3">
    Requirements
  </h2>

  <ul className="list-disc pl-5 space-y-2 text-gray-600">
    {job.requirements.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
</div>
<button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
  Apply Now
</button>


    </div>
    )

}