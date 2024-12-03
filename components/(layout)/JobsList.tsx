import JobCard from "../(job)/JobCard";

const jobs = [
  {
    id: "job-1",
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
];

const Jobslist = () => {
  return (
    <section className="pb-52">
      <div className="container flex flex-col items-center gap-16 lg:px-16 mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobslist;
