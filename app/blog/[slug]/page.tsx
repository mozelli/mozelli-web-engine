import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Artigo",
  description: "",
});

interface BlogSlugProps {
  params: { slug: string };
}

const BlogSlug = ({ params }: BlogSlugProps) => {
  return <div className="">Post: {params.slug}</div>;
};

export default BlogSlug;
