'use client';
import {useState} from "react";
import {useRouter} from "next/navigation";
export default function Hero(){
  const router = useRouter();
  const [search,setSearch]=useState("");
  function handleSubmit(e:React.FormEvent){
    e.preventDefault();
    if(search.trim() !==""){
      router.push(`/jobs?search=${search}`);
    }
  }

    return(
        <div className=" bg-gray-100 py-20 text-center">
            <h2 className="text-4xl font-bold mb-4">Find Your Dream Job Today</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">  Discover thousands of job opportunities from top companies
          & take the next step in your career.</p>
          <form  className="mt-8  flex justify-center" onSubmit={handleSubmit}>
            <div className="flex w-full max-w-2xl  gap-3">
                <input type="text" placeholder="Search for jobs..." className="flex-1 border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-blue-500" value={search} onChange ={(e)=>setSearch(e.target.value)} />
                <button type="submit" className=" bg-blue-500 text-white px-6  py-3  hover:bg-blue-600 rounded-xl ">Search</button>
            </div>
          </form>
<div className="mt-6 flex justify-center gap-3">
  <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 transition-all duration-200 hover:-translate-y-1 hover:bg-blue-600 hover:text-white">
    Designer
  </span>

  <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 transition-all duration-200 hover:-translate-y-1 hover:bg-blue-600 hover:text-white">
    Developer
  </span>

  <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 transition-all duration-200 hover:-translate-y-1 hover:bg-blue-600 hover:text-white">
    Web 
  </span>
</div>
        </div>
    )
}