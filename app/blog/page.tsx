import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Blog",
  description: "Página com a lista de artigos do Blog Mozelli Marketing",
});

const BlogPage = () => {
  return <div className="">Lista de artigos</div>;
};

export default BlogPage;
