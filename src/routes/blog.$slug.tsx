import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/components/sections/Blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — Sara Johnson` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:type", content: "article" },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:url", content: `/blog/${params.slug}` },
        ]
      : [],
    links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
  }),
  component: Post,
});

function Post() {
  const { post } = Route.useLoaderData();
  return (
    <article className="pt-32 pb-32">
      <div className="mx-auto max-w-3xl px-6">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-blush mb-12">
          <ArrowLeft className="w-4 h-4" /> All posts
        </Link>
        <p className="text-xs uppercase tracking-[0.3em] text-blush mb-4">{post.category} · {post.date}</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">{post.title}</h1>
        <p className="mt-6 text-xl text-muted-foreground">{post.excerpt}</p>

        <div className="mt-16 prose prose-invert max-w-none space-y-6 text-lg text-foreground/90 leading-relaxed">
          <p>This is a draft chapter from my running journal — a place where I try to write down what I'm learning while I work. I publish notes about UI/UX, freelancing, and the strange experience of being a designer-writer-editor-developer in a remote-first economy.</p>
          <p>Every post is unfinished by design. If you'd like to push back, share a counter-example, or co-write something, the contact form is one click away.</p>
          <p>Thanks for reading. — Sara</p>
        </div>
      </div>
    </article>
  );
}
