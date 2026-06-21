import CategoryCard from "./CategoryCard";
import { categories } from "../data/categories";
import { jobs } from "../data/jobs";
export default function CategoriesPage(){
    return(
        <div className=" px-5 container mx-auto w-full max-w-screen-xl py-20 text-center">
            <h2 className="text-3xl font-bold mb-4 "> Browse By Categories</h2>
            <p className="text-gray-600 mb-6"> Explore jobs by your preferred category.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {
            categories.map((ele)=>(
                <CategoryCard key={ele.id}  icon={ele.icon} title={ele.title}   jobs={
        jobs.filter(
          (job) => job.category === ele.title
        ).length
      } />
            ))  
           }
            </div>

        </div>
    )
}