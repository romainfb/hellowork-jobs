import { ArrowRight } from "lucide-react";
import { Job } from "@/types/job";

const JobCard = ({ job }: { job: Job }) => {
  return (
    <a
      key={job.id}
      href={job.link}
      className="flex flex-col text-clip rounded-xl border border-border"
    >
      <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
        <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl lg:mb-6">
          {job.title}
        </h3>
        <p className="mb-3 text-muted-foreground md:mb-4 lg:mb-6">
          {job.description}
        </p>
        <p className="flex items-center hover:underline">
          Postuler
          <ArrowRight className="ml-2 size-4" />
        </p>
      </div>
    </a>
  );
};

export default JobCard;
