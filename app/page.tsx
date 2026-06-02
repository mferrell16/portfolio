import Image from "next/image";
import Link from "next/link";
import { Post, posts } from "@/data/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const latestPosts: Post[] = posts.filter(post => post.type === "TryHackMe" || post.type === "AI").slice(0, 3);

  return (
    <main>
      {/*Hero Section*/}
      <section className="mx-auto mb-10 gap-6 px-4 flex flex-col justify-center items-center md:flex-row md:justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-8 leading-12">
            Hi, I&#39;m <span className="text-primary">Makayla Ferrell.</span>
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
        <div className="md:w-1/2 md:flex md:justify-end">
          <Image
            priority
            className="rounded-lg w-full h-auto"
            height={900}
            width={600}
            src="/img/grad.webp"
            alt="Makayla Ferrell graduation photo"
          />
        </div>
      </section>
      {/*Latest Blogs*/}
      <section className="container mx-auto px-4 mb-10">
        <h2 className="text-center md:text-left text-xl md:text-2xl font-bold mb-4">
          Latest Blog Posts
        </h2>
        <div className="flex flex-col gap-4 md:flex-row">
          {latestPosts.map((post: Post) => {
            return <PostCard key={post.link} post={post} />;
          })}
        </div>
        <div className="flex justify-center my-4">
          <Link
            className="bg-primary hover:bg-secondary rounded-md px-2 py-1 duration-300 ease-in-out"
            href="/blog"
          >
            View All
          </Link>
        </div>
      </section>
    </main>
  );
}
