'use client';
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
export default function PostJob(){
const router = useRouter();
    const [title, setTitle] = useState("");
const [company, setCompany] = useState("");
const [location, setLocation] = useState("");
const [salary, setSalary] = useState("");
const [category, setCategory] = useState("");
const [type, setType] = useState("");
const [workMode, setWorkMode] = useState("");

const [description, setDescription] = useState("");
const [requirements, setRequirements] = useState("");
function handleSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    const newJob = {id:Date.now(),title,company,location,category,
  type,
  salary,
  workMode,
  description,
  requirements: requirements.split(","),};
    const storedJobs = localStorage.getItem("PostedJobs");
    const oldJobs = JSON.parse(storedJobs ?? "[]");
    localStorage.setItem("PostedJobs", JSON.stringify([...oldJobs, newJob]));
     
      router.push("/my-posted-jobs");



}
    return(
        <div className="min-h-screen bg-gray-100 py-20">
        <div className="max-w-3xl mx-auto px-5">
            <h1 className="text-4xl font-bold mb-4 text-center">Post a Job</h1>

 <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-8 space-y-5">
    <div className="grid md:grid-cols-2 gap-5">
        <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500" placeholder="Job Title" value ={title}  onChange={(e)=>setTitle(e.target.value)} required/>
        <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500" placeholder="Company Name" value ={company} onChange={(e)=>setCompany(e.target.value)} required />
        <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500" placeholder="Location" value ={location} onChange={(e)=>setLocation(e.target.value)} required />
        <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500" placeholder="Salary" value={salary} onChange={(e)=>setSalary(e.target.value)} required />
        </div>
        <div className ="grid md:grid-cols-3 gap-5">
 <select className ="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500" value ={category} onChange={(e)=>setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="Development">Development</option>
              <option value="Design">Design</option>
  <option value="Marketing">Marketing</option>
  <option value="Data Science">Data Science</option>
  <option value="Mobile App">Mobile App</option>
  <option value="Customer Service">Customer Service</option>
        </select>
        <select className ="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500" value ={type} onChange={(e)=>setType(e.target.value)}>
            <option value="">Job Type</option>
           <option value="Full-time">Full-time</option>
  <option value="Part-time">Part-time</option>
  <option value="Internship">Internship</option>
  <option value="Contract">Contract</option>
        </select>
        <select className ="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500" value={workMode} onChange={(e)=>setWorkMode(e.target.value)} >
             <option value="">Select Work Mode</option>
  <option value="Remote">Remote</option>
  <option value="Hybrid">Hybrid</option>
  <option value="On-site">On-site</option>
        </select>
        </div>
        
        <textarea rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 resize-none" placeholder="Job Description"  value={description}
  onChange={(e) => setDescription(e.target.value)} />
        <input
  type="text"
  placeholder="React.js, JavaScript, Tailwind CSS"
  value={requirements}
  onChange={(e) => setRequirements(e.target.value)}
   className ="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
/>
        <button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-lg py-3">  Post Job</button>
    </form>
        </div>
        </div>
   
    )
}