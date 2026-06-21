'use client';
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-800">
     <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <h1><Link href="/" className="text-white text-2xl font-bold">TalentHub</Link></h1>
        <div className="hidden lg:flex items-center ">
            <Link href="/" className="text-xl text-gray-300 hover:text-white mx-4">Home</Link>
            <Link href="/jobs" className="text-xl text-gray-300 hover:text-white mx-4 ">Jobs</Link>
            <Link href="/companies" className="text-xl text-gray-300 hover:text-white mx-4 ">Companies</Link>
            <Link href="/saved-jobs" className= "text-xl text-gray-300 hover:text-white mx-4 ">Saved jobs</Link>
            
        </div>
          <div className="hidden lg:block">
    <Link
      href="/post-job"
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Post a Job
    </Link>
  </div>
        <button
  className="lg:hidden text-white"
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? <X size={28} /> : <Menu size={28} />}
</button>
       

</div>
{isOpen && (
  <div className="lg:hidden flex flex-col px-8 pb-4">
    <Link href="/" className="text-gray-300 py-2">
      Home
    </Link>

    <Link href="/jobs" className="text-gray-300 py-2">
      Jobs
    </Link>

    <Link href="/companies" className="text-gray-300 py-2">
      Companies
    </Link>

    <Link href="/saved-jobs" className="text-gray-300 py-2">
      Saved Jobs
    </Link>

    <Link
      href="/post-job"
      className="bg-blue-500 text-white px-4 py-2 rounded mt-3 text-center"
    >
      Post a Job
    </Link>
  </div>
)}
    </nav>
  );
}