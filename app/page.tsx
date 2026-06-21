import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import FeaturedJobs from "./components/FeaturedJob";
import Categories from "./components/Categories";
import LatestJobs from "./components/LatestJobs";
import CompanyCard from "./components/CompanyCard";

export default function Home() {
  return (
    <div>
    
         <Hero />
         <Categories />
       <FeaturedJobs />
       <LatestJobs />
   
  
    </div>
  );
}
