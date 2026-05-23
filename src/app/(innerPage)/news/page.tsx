import BlogCard from "@/components/sections/blogs/blogCard";
import PageTitle from "@/components/sections/pageTitle";
import Pagination from "@/components/ui/pagination";
import { blogPostsThreeData } from "@/db/blogPostsThreeData";
import { Metadata } from "next";

// Static metadata definition for the blog listing page
export const metadata: Metadata = {
  title: "Solar Blog | Price, Subsidy & Installation Guide",
  description:
    "Read expert blogs on solar panel price, subsidy, installation & maintenance in Uttar Pradesh. Everything you need to know before going solar in UP.",
  keywords: [
    "solar energy blog india",
    "solar tips uttar pradesh",
    "solar panel price and subsidy UP",
  ],
  openGraph: {
    title: "Blog & Insights",
    description:
      "Stay up to date with our latest news, articles, and expert insights.",
    type: "website",
  },
};

const Blog = () => {
  return (
    <>
      <PageTitle currentPage="Blog Grid" title="Blog Grid" />
      <section className="news-section-4 fix section-padding">
        <div className="container">
          <div className="row g-4">
            {blogPostsThreeData.map((news) => {
              return (
                <div
                  key={news.id}
                  className="col-xl-4 col-lg-6 col-md-6 wow slideUp"
                  data-delay=".3"
                >
                  <BlogCard
                    width={414}
                    height={269}
                    news={news}
                    className={"style-2 mt-0 pb-0"}
                  />
                </div>
              );
            })}
          </div>
          <Pagination />
        </div>
      </section>
    </>
  );
};

export default Blog;
