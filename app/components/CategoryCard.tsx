import Link from "next/link";
import { LucideIcon } from "lucide-react";
type CategoryCardProps = {
  icon: LucideIcon;
  title: string;
  jobs: number;
};
export default function CategoryCard({icon:Icon,title,jobs}:CategoryCardProps) {
return(
    <Link href={`/jobs?category=${title}`}>
    <div className="bg-white rounded-xl  p-6 border border-gray-200 hover:border-blue-500 transition-all duration-200 cursor-pointer text-center">
       < div className="flex justify-center mb-4">
         <div className=" p-3 bg-blue-50 rounded-full">
        <Icon size={28} className="text-blue-600 " />
      </div>
      </div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-2">{jobs} jobs Available</p>
        </div>
        </Link>
)
}