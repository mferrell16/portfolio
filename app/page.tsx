import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/*Hero Section*/}
      <section className="container mx-auto mb-10 gap-6 max-sm:px-6 flex flex-col justify-center items-center md:flex-row md:justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-8 leading-12">
            Hi, I'm <span className="text-primary">Makayla Ferrell.</span>
            <br />
            This is my life <span className="text-primary">Decoded.</span>
          </h1>
          <p className="text-gray-font">
            I’m a software engineer turned ethical hacker who loves breaking
            things (responsibly). This site is home to my write-ups, information
            about me, and ways to get in touch. Click around and see what I’ve
            been up to!
          </p>
        </div>
        <div className="md:flex md:justify-end">
          <Image
            className="rounded-lg md:size-4/5"
            height={900}
            width={600}
            src="/img/grad.webp"
            alt="Makayla Ferrell graduation photo"
          />
        </div>
      </section>
      {/*Latest Blogs*/}
      <section className="container mx-auto max-sm:px-6 mb-10">
        <h2 className="text-center md:text-left text-xl md:text-2xl font-bold mb-4">
          Latest Blog Posts
        </h2>
        <div
          className="flex flex-col gap-4 md:flex-row"
          id="featured-posts"
        ></div>
        <div className="flex justify-center my-4">
          <Link
            className="bg-primary hover:bg-secondary rounded-md px-2 py-1 duration-300 ease-in-out"
            href="/blog.html"
          >
            View All
          </Link>
        </div>
      </section>
    </main>
  );
}
