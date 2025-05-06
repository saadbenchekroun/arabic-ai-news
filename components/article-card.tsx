import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"

interface ArticleCardProps {
  id: number
  title: string
  excerpt: string
  slug: string
  image: string
  readingTime: string
  compact?: boolean
}

export default function ArticleCard({
  id,
  title,
  excerpt,
  slug,
  image,
  readingTime,
  compact = false,
}: ArticleCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={`block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
        compact ? "flex" : ""
      }`}
    >
      <div className={`${compact ? "w-24 h-24 flex-shrink-0" : "h-48 w-full"} relative`}>
        <Image
          src={image || `/placeholder.svg?height=400&width=600&text=${id}`}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className={`${compact ? "p-3" : "p-6"}`}>
        <h3
          className={`font-bold text-gray-900 hover:text-blue-600 transition ${
            compact ? "text-sm mb-1 line-clamp-2" : "text-xl mb-3"
          }`}
        >
          {title}
        </h3>

        {!compact && <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>}

        <div className="flex items-center text-gray-500 text-sm">
          <Clock className="h-3.5 w-3.5 ml-1" />
          <span>{readingTime}</span>
        </div>
      </div>
    </Link>
  )
}

