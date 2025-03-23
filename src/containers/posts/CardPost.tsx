import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import React from "react";
const BLUR_FADE_DELAY = 0.04;
export default function CardPost({ post, id }: { post: any; id: number }) {
  return (
    <BlurFade
      className="border p-3 mt-2 group rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/20 cursor-pointer"
      delay={BLUR_FADE_DELAY * 2 + id * 0.05}
      key={post?.slug}
    >
      <Link
        href={`/blogs/${post?.slug}?cat=${post?.metadata?.category}`}
        className="w-full flex flex-col space-y-1 mb-4"
      >
        <h2 className="tracking-tight group-hover:underline text-md">
          {post.metadata.title}
          <Link href={`/blogs?cat=${post?.metadata?.category}`} legacyBehavior>
            <Badge className="ml-3 bg-gray-800 bg-opacity-80 text-white">
              {post.metadata.category}
            </Badge>
          </Link>
        </h2>
        <p className="h-6 text-xs mt-1 text-muted-foreground">
          {formatDate(post.metadata?.publishedAt)}
        </p>
        <p className="text-xs text_ecl-2 text-gray-400 text_ecl-2">
          {post.metadata.summary}
        </p>
      </Link>
    </BlurFade>
  );
}
