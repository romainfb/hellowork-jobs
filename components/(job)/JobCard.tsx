import { ArrowRight } from "lucide-react";
import { Job } from "@/types/job";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";

const JobCard = ({ job }: { job: Job }) => {
  return (
    <Link
      href={job.link}
      className="flex flex-col text-clip rounded-xl border border-border"
      target="_blank"
    >
      <div className="flex flex-col px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
        <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl lg:mb-6">
          {job.title}
        </h3>
        <span className="text-accent-foreground text-sm md:text-base lg:text-lg mb-6">
          {job.company} - {job.city} ({job.department})
        </span>

        <div className="flex space-x-4 w-full ">
          {job.salary && (
            <Badge className="bg-primary text-accent mb-4">{job.salary}</Badge>
          )}
        </div>
        <p className="mb-3 text-muted-foreground md:mb-4 lg:mb-6">
          {job.description}
        </p>
        <Button className="mt-6 flex items-center" variant="default">
          Voir l'annonce
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>
    </Link>
  );
};

export default JobCard;
