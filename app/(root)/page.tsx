import Image from "next/image";
import SearchForm from "../components/SearchForm";



export default async function Home({ searchParams }: {
  searchParams: { query?: string };
}) {
  const query = (await searchParams).query;

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup,<br />Connect with Entrepreneurship
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, vote on pitches, and get noticed in virtual space.
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
