'use client';
import { Building2, MapPin, Briefcase, Bookmark  } from "lucide-react";
import Link from "next/link";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  jobType: string;
  salary: string;
  category: string;
  mode: string;
  id: string | number;
  onSave?: () => void;
  isSaved?: boolean;
}

export default function JobCard({
  title,
  company,
  location,
  jobType,
  salary,
  category,
  mode,
  id,
  onSave,
  isSaved,
}: JobCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md border-gray-200 border hover:border-blue-500 transition-shadow duration-300">
      <div className="flex justify-between mb-7 items-center">
        <h3 className="text-xl font-semibold ">{title}</h3>
        <Bookmark
          size={20}
          className={isSaved ? "text-blue-600" : "text-gray-400"}
          onClick={() => onSave?.()}
        />
      </div>

      <div className="flex items-center gap-2 text-gray-500 mt-1">
        <Building2 size={16} />
        <span>{company}</span>
      </div>
      <div className="flex gap-2 mt-4">
        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
          {category}
        </span>
        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
          {mode}
        </span>
      </div>

      <div className="text-gray-600 mt-4 space-y-2">
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase size={16} />
          <span>{jobType}</span>
        </div>
      </div>
      <p className="mt-4 font-semibold text-blue-600">{salary}</p>
      <Link href={`/jobs/${id}`}>
        <button className="mt-5 rounded-lg bg-blue-600 text-white w-full py-2 hover:bg-blue-700 ">
          View Details
        </button>
      </Link>

    </div>
  );
}
