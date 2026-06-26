import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import ProductImage from "@/components/ProductImage";

interface Props { params: Promise<{ slug: string }>; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="bg-white min-h-screen">
      <header className="bg-[#102A43] py-20 text-center text-white"><div className="container-fox"><Link href="/blog" className="text-accent font-bold text-xs uppercase mb-6 inline-block">← Back</Link><h1 className="text-3xl md:text-5xl font-black uppercase">{post.title}</h1></div></header>
      <div className="max-w-[1000px] mx-auto px-4 -mt-16 mb-24"><div className="aspect-[21/9] rounded-xl overflow-hidden shadow-2xl border-8 border-white"><ProductImage src={post.image} alt={post.title} className="w-full h-full object-cover" /></div><div className="mt-20 prose prose-lg max-w-none text-muted leading-relaxed" style={{ wordSpacing: "0.15em" }}>{post.content}</div></div>
    </article>
  );
}
