import Link from "next/link";
import ImageSection from "@/components/ImageSection";

export default function Home() {
  return (
    <main className="section">
      <section className=" bg-slate-50 rounded-md w-4/5 sm:w-3/5 sm:h-3/4 sm:grid sm:grid-cols-2 h-">
        <ImageSection />
        <div className="mx-auto text-center py-16 lg:py-20 h-full justify-between flex flex-col gap-6">
          <h1 className="text-4xl font-bold flex items-center justify-center">Welcome to my ToDo App</h1>
          <div>
            <p>
              Welcome to our community of wanderers! We&apos;re thrilled to have you
              here. Soon, you&apos;ll have the opportunity to discover more about
              exciting journeys and the experiences of our participants. Inspiration
              awaits you around every corner!
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
        {/* <main className="mx-auto text-center py-16 lg:py-20 h-full justify-between flex flex-col gap-6">

        </main> */}
      </section>
    </main>
  );
}
