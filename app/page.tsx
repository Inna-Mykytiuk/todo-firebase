import Link from "next/link";
import ImageSection from "@/components/ImageSection";

export default function Home() {
  return (
    <main className="section flex h-screen w-full items-center justify-center bg-sectionBcg">
      <section className="h- w-4/5 rounded-md bg-slate-50 sm:grid sm:h-3/4 sm:w-3/5 xl:grid-cols-2">
        <ImageSection />
        <div className="mx-4 flex h-full flex-col justify-center gap-6 py-12 text-center xl:mx-20 xl:py-20">
          <h1 className="flex items-center justify-center text-4xl font-bold">
            Welcome to my ToDo App
          </h1>
          <div>
            <p>
              Your daily companion for staying organized and productive!
              Effortlessly add, track, and manage your tasks for each day,
              ensuring nothing important is ever missed. Make every day a
              success with our simple and intuitive task manager!
            </p>
            <p className="md:display-flex hidden">
              If you&apos;re ready to embark on your adventure, press the
              &quot;Explore&quot; button below and immerse yourself in the world
              of impressions and possibilities.
            </p>
          </div>
          <Link
            href="/login"
            className="mx-auto mt-4 flex justify-center rounded bg-gradient px-4 py-2 font-bold text-white transition-all duration-300 ease-out hover:bg-mainColor"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
