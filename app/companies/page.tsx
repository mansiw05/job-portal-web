import CompanyCard from "../components/CompanyCard";
import { companies } from "../data/companies";
export default function CompanyPage(){
    return(
        <div className="container mx-auto py-20 px-5 w-full max-w-screen-xl">
            <h2 className="text-4xl font-bold mb-4 text-center">Top Companies</h2>
            <p className="text-gray-600 text-center mb-10">
  Explore leading companies and discover exciting career opportunities with them.
  </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {
            companies.map((ele)=>(
                <CompanyCard key={ele.id} name={ele.name} location={ele.location} jobs={ele.jobs} />
            ))
           }
         </div>
        </div>
    )
}