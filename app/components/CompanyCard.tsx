import Link from "next/link";
import { Building2, MapPin } from "lucide-react";
type CompanyCardProps = {
  name: string;
  location: string;
  jobs: number;
};
export default function CompanyCard({ name, location, jobs }:CompanyCardProps) {
  return (
   <div className ="rounded-xl bg-white p-7 shadow-md border border-gray-300 hover:border-blue-600 text-center">
    <div className="flex items-center justify-center gap-3 mb-4 ">
      <Building2 size={24} className="text-blue-600" />
      <h3 className="text-xl font-semibold">{name}</h3>
    </div>
    <div className="flex items-center justify-center gap-3 text-gray-500 mb-4">
      <MapPin size={18} />
      <span>{location}</span>
    </div>
    <div className="text-gray-600">
      <p>{jobs} Jobs Available</p>
         <div className="mt-4">
   <Link
  href={`/jobs?company=${name}`}
  className="block w-full bg-blue-600 text-white py-2 mt-1 rounded-lg hover:bg-blue-700 transition"
>
  View Jobs
</Link>
   </div>
   </div>
   </div>
  );
}