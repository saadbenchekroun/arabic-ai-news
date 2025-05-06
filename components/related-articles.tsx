import ArticleCard from "./article-card"

interface Article {
  id: number
  title: string
  excerpt: string
  slug: string
  image: string
  readingTime: string
  category: string
}

export default function RelatedArticles({
  articles,
  recommended,
}: {
  articles: Article[]
  recommended: Article[]
}) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-bold text-gray-900 mb-4">مقالات ذات صلة</h3>
        <div className="space-y-4">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              excerpt={article.excerpt}
              slug={article.slug}
              image={article.image}
              readingTime={article.readingTime}
              compact
            />
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="font-bold text-gray-900 mb-4">موصى به لك</h3>
        <div className="space-y-4">
          {recommended.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              excerpt={article.excerpt}
              slug={article.slug}
              image={article.image}
              readingTime={article.readingTime}
              compact
            />
          ))}
        </div>
      </div>
    </div>
  )
}

