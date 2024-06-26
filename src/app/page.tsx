import SearchForm from "@/components/Search-form";
import Link from "next/link";
import H1 from "@/components/H1";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-3 pt-36 ">
      <H1>Finds events around you</H1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
        Browse more than
        <span className="font-bold italic underline text-accent">
          10,000 events{" "}
        </span>
        world wide
      </p>
      <SearchForm />
      <section className="flex mt-4 gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2">
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}