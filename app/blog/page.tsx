import { Post, posts } from "@/data/posts";
import PostCard from "@/components/PostCard";

export default function Blog() {
  return (
    <main className="px-4">
      <h1 className="text-4xl text-center font-bold">My <span className="text-primary">Blog</span></h1>
      <div className="flex flex-col gap-4 mt-10 sm:grid sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post: Post) => {
          return <PostCard key={post.link} post={post} />;
      })}
      </div>
    </main>
  )
}