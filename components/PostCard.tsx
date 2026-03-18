import { Post } from "@/data/posts";
import Image from "next/image";

interface PostCardProps {
  post: Post;
}
export default function PostCard({ post }: PostCardProps) {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noreferrer noopener"
      className="flex flex-1"
    >
      <div className="group w-full bg-[#2a2e35] rounded-lg overflow-hidden transition duration-300 hover:-translate-y-1">
        <div className="relative w-full h-50">
          <Image
            className="object-cover md:grayscale-55 transition duration-300 ease-in-out group-hover:grayscale-0"
            alt={post.alt}
            src={post.src}
            fill
          />
        </div>
        <div className="px-4 pb-4">
          <h2 className="font-bold text-primary text-xl mt-4">{post.title}</h2>
          <p className="bg-primary px-3 py-1 rounded-2xl text-xs inline-block my-4">
            {post.type}
          </p>
          <p>{post.desc}</p>
        </div>
      </div>
    </a>
  );
}
