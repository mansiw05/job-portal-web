import Link from "next/link";
export default function Footer(){
    return(
        <footer className=" bg-gray-900 text-white mt-10">
          <div className="container mx-auto py-10 px-4 max-w-screen-xl">
          <div className ="grid grid-cols-1 md:grid-cols-3 gap-10">
           <div>
          <Link href="/"><h2 className="text-2xl font-semibold mb-3">TalentHub</h2></Link>  
            <p className ="text-gray-400"> Find your dream job and connect with top
          companies across different industries.</p>
            </div>
          <div>
            <h3 className="font-semibold mb-3">Quick Link</h3>
            <ul className="space-y-2 text-gray-400">
               <li><Link href="/">Home</Link></li> 
               <li><Link href="/jobs">Jobs</Link></li> 
               <li><Link href="/companies">Companies</Link></li> 
               <li><Link href="/saved-jobs">Saved jobs</Link></li> 
            </ul>
          </div>
           <div>
        <h3 className="font-semibold mb-3">
          Categories
        </h3>

        <ul className="space-y-2 text-gray-400">
          <li><Link href="/jobs?category=Development">Development</Link></li>
          <li><Link href="/jobs?category=Design">Design</Link></li>
          <li><Link href="/jobs?category=Marketing">Marketing</Link></li>
          <li><Link href="/jobs?category=Data+Science">Data Science</Link></li>
        </ul>
      </div>
          </div>
           <div className="border-t border-gray-800 my-4  pt-4   text-center text-gray-500">
      © 2026 TalentHub. All rights reserved.
    </div>
        </div>

   
</footer>
    )
}