"use client";
import dynamic from "next/dynamic";
import React from "react";

const MDXRemote = dynamic(() => import("next-mdx-remote").then((mod) => mod.MDXRemote), {
  ssr: false,
  suspense: true,
  loading: () => <div className="animate-pulse h-32 bg-gray-200 dark:bg-gray-800 rounded" />
});

// Preload the component
if (typeof window !== 'undefined') {
  import("next-mdx-remote");
}

export default function ContentPost({ source }: any) {
  return <div>{source && <MDXRemote {...source} />}</div>;
}
