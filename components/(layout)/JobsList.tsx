"use client";

import { useState, useEffect } from "react";
import JobCard from "@/components/(job)/JobCard";
import { getJobs } from "@/lib/jobData";
import { Button } from "@/components//ui/button";
import JobSkeleton from "@/components/(skeleton)/JobSkeleton";

const Jobslist = () => {
  const [jobs, setJobs] = useState([]);
  const [totalJobs, setTotalJobs] = useState(0);
  const [page, setPage] = useState(1);
  const [what, setWhat] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJobs = async (page: number, searchQuery: string) => {
    setLoading(true);
    const { ads, total } = await getJobs(page, searchQuery);
    setJobs(ads);
    setTotalJobs(total);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs(page, what);
  }, [page]);

  const handleSearch = () => {
    console.log("Recherche:", what);
    setPage(1);
    fetchJobs(1, what);
  };

  const totalPages = Math.ceil(totalJobs / 9);

  return (
    <section className="pb-52">
      <div className="container flex flex-col items-center gap-16 lg:px-16 mx-auto">
        {/* Barre de recherche */}
        <div className="w-full max-w-xl mb-8 flex gap-4">
          <input
            type="text"
            placeholder="Rechercher par mot-clé"
            value={what}
            onChange={(e) => setWhat(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
          <Button
            onClick={handleSearch}
            disabled={loading}
            variant={"default"}
            className="px-8 py-2 text-white rounded h-12"
          >
            Rechercher
          </Button>
        </div>

        {/* Liste des annonces */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {loading ? (
            <>
              {Array.from({ length: 9 }).map((_, index) => (
                <JobSkeleton key={index} />
              ))}
            </>
          ) : jobs.length > 0 ? (
            jobs.map((job: any) => (
              <JobCard
                key={job.id}
                job={{
                  id: job.id,
                  title: job.title || "Titre non disponible",
                  description: job.description || "Description non disponible",
                  link: job.link || "#",
                  publicationDate: job.publicationDate || null,
                  city: job.city || "Ville non disponible",
                  department: job.department || "Département non disponible",
                  postalCode: job.postalCode || "Code postal non disponible",
                  company: job.company || "Entreprise non disponible",
                }}
              />
            ))
          ) : (
            <>
              <br></br>
              <p>Aucune annonce ne correspond à votre recherche.</p>
            </>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <Button
            disabled={page === 1 || loading}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2"
          >
            Précédent
          </Button>
          <span>
            Page {page} sur {totalPages}
          </span>
          <Button
            variant={"default"}
            disabled={page === totalPages || loading}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2"
          >
            Suivant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Jobslist;
