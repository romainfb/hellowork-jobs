import HomepageHero from "@/components/(layout)/HomepageHero";
import Jobslist from "@/components/(layout)/JobsList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomepageHero />
      <Jobslist />
    </>
  );
}
