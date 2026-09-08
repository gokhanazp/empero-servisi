import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts, getPost, postSlugs } from "@/content/blog";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

const dateFormatter = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `${site.url}/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url,
      title: post.metaTitle,
      description: post.metaDescription,
      siteName: site.name,
      locale: "tr_TR",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${site.url}/blog/${post.slug}`;
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            description: post.metaDescription,
            url,
            date: post.date,
            updated: post.updated,
          }),
          ...(post.faq ? [faqSchema(post.faq)] : []),
          breadcrumbSchema([
            { name: "Ana Sayfa", url: site.url },
            { name: "Blog", url: `${site.url}/blog` },
            { name: post.title, url },
          ]),
        ]}
      />

      <section className="page-hero grain border-b border-ink-800">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:py-14">
          <div className="[&_a]:text-ink-400 [&_a:hover]:text-brand-400 [&_span]:text-ink-500 [&_[aria-current]]:text-ink-300">
            <Breadcrumbs
              items={[
                { name: "Blog", href: "/blog" },
                { name: post.category, href: "/blog" },
              ]}
            />
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-brand-400">
            {post.category}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-400">
            <time dateTime={post.date}>
              {dateFormatter.format(new Date(post.date))}
            </time>
            <span className="text-ink-600">·</span>
            <span>{post.readingMinutes} dakikalık okuma</span>
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <p className="border-l-4 border-brand-500 bg-brand-50/50 py-3 pl-4 text-lg leading-relaxed text-ink-700">
          {post.excerpt}
        </p>

        <article className="mt-10">
          {post.body.map((section) => (
            <section key={section.heading} className="mt-10 first:mt-0">
              <h2 className="text-xl font-bold tracking-tight text-ink-900 sm:text-2xl">
                {section.heading}
              </h2>
              <div className="prose-tr mt-4 text-[1.0625rem]">
                {section.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </article>

        {post.faq && (
          <div className="mt-14">
            <FaqList items={post.faq} title="Bu konuda sık sorulanlar" />
          </div>
        )}

        <Cta
          title="Bu arızayı yaşıyorsanız"
          text="Telefonda birkaç cümleyle anlatmanız yeterli. Çoğu durumda servis çağırmanıza gerek olup olmadığını da telefonda söyleyebiliyoruz."
        />

        <section className="mt-4">
          <h2 className="text-xl font-bold tracking-tight text-ink-900">
            Diğer yazılar
          </h2>
          <ul className="mt-5 space-y-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/blog/${o.slug}`}
                  className="group block rounded-xl border border-ink-200 bg-white p-4 transition-colors hover:border-brand-300 hover:bg-brand-50/30"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                    {o.category}
                  </span>
                  <span className="mt-1 block text-base font-bold text-ink-900">
                    {o.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink-600">
                    {o.excerpt}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
