import React from "react";
import { Job } from "../../types/job";
import { formatDate } from "../../utils/dateUtils";

interface JobCardProps {
  job: Job;
  onClick: () => void;
  index: number;
}

const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-[#25262b] p-6 rounded-lg cursor-pointer hover:bg-[#2c2d32] transition-all border border-[#2c2d32] shadow-sm hover:shadow-md"
    >
      <div className="flex gap-6 sm:gap-5">
        {/* 프로필 이미지 */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-gray-700 border border-gray-600">
            {job.publisher.image ? (
              <img
                src={job.publisher.image}
                alt={job.publisher.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500 text-xl">
                {job.publisher.name[0]}
              </div>
            )}
          </div>
        </div>

        {/* 컨텐츠 */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col h-full">
            <div className="mb-auto">
              <h2 className="text-xl font-bold text-gray-100 mb-3 line-clamp-1">
                {job.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {job.videoType?.map((type) => (
                  <span
                    key={type}
                    className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                  >
                    {type}
                  </span>
                ))}
                {job.skills?.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block bg-[#3a3b40] text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 하단 정보 */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400 font-medium">
                {job.publisher.name}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-gray-500">
                  {formatDate(job.publishedAt)}
                </span>
                <span
                  className={`px-2 py-0.5 rounded text-xs ${
                    job.platform === "youtube"
                      ? "bg-red-500/20 text-red-300 border border-red-500/30"
                      : job.platform === "x"
                      ? "bg-[#2c2d32] text-white border border-[#404040]"
                      : "bg-green-500/20 text-green-300 border border-green-500/30"
                  }`}
                >
                  {job.platform === "youtube"
                    ? "YouTube"
                    : job.platform === "x"
                    ? "X"
                    : "카페"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;