import Image from "next/image";
import SearchForm from "../components/SearchForm";
import StartupCard from "../components/StartupCard";

const Posts = [
  {
    _createdAt:new Date(),
    views: 100,
    author:{_id:1, name:'Goku'},
    _id:1,
    description:"This is a test",
    category:"Goku_test",
    title:"Goku_test",
    image:"https://www.google.com/imgres?q=goku%20images&imgurl=https%3A%2F%2Frukminim2.flixcart.com%2Fimage%2F850%2F1000%2Fkw85bww0%2Fposter%2F9%2Fl%2Fk%2Fsmall-goku-super-saiyan-instinct-wall-poster-redcloud-asstore-original-imag8ya9zyvdjqny.jpeg%3Fq%3D20%26crop%3Dfalse&imgrefurl=https%3A%2F%2Fwww.flipkart.com%2Fgoku-super-saiyan-instinct-wall-poster-redcloud-paper-print%2Fp%2Fitmd255a10cb136f&docid=FgLg3JdcBNJkUM&tbnid=F6Zyg9m0kZ4sDM&vet=12ahUKEwi30ZOAue6MAxVb8DQHHd1zEH0QM3oECBcQAA..i&w=680&h=1000&hcb=2&ved=2ahUKEwi30ZOAue6MAxVb8DQHHd1zEH0QM3oECBcQAA",

  }
]

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
      <section className="section_container">
        <p className="text-30-semibold">
          {query? `Search results for "${query}"` : "All Startups"} 


        </p>
        <ul className="mt-6 card_grid">
          {Posts.length >0 ? Posts.map((post:StartupCardType ) =>(
            <StartupCard key={post?._id} post={post}/>
          )):
          <p>Sorry we will fix this soon</p>
          }

        </ul>

      </section>

    </>
  );
}
