import Link from "next/link";
import ImageSection from "@/components/ImageSection";

export default function Home() {
  return (
    <main className="section w-full h-screen flex justify-center items-center bg-sectionBcg">
      <section className=" bg-slate-50 rounded-md w-4/5 sm:w-3/5 sm:h-3/4 sm:grid xl:grid-cols-2 h-">
        <ImageSection />
        <div className="mx-4 xl:mx-20 text-center py-12 xl:py-20 h-full justify-center flex flex-col gap-6">
          <h1 className="text-4xl font-bold flex items-center justify-center">Welcome to my ToDo App</h1>
          <div>
            <p>
              Your daily companion for staying organized and productive! Effortlessly add, track, and manage your tasks for each day, ensuring nothing important is ever missed. Make every day a success with our simple and intuitive task manager!
            </p>
            <p className="hidden md:display-flex">
              If you&apos;re ready to embark on your adventure, press the
              &quot;Explore&quot; button below and immerse yourself in the world of
              impressions and possibilities.
            </p>
          </div>
          <Link href='/login' className="mx-auto mt-4 flex  justify-center rounded bg-gradient px-4 py-2 font-bold text-white transition-all duration-300 ease-out hover:bg-mainColor">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
