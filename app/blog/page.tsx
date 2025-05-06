import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CategoryFilter from "@/components/category-filter"
import FeaturedPost from "@/components/featured-post"
import GridPosts from "@/components/grid-posts"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <CategoryFilter />
        <div className="mt-12">
          <FeaturedPost />
        </div>
        <div className="mt-16 mb-20">
          <GridPosts />
        </div>
      </main>
    </div>
  )
}

