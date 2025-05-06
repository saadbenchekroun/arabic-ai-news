import Image from "next/image"
import Link from "next/link"

const posts = [
  {
    id: 1,
    title: "كيف يغير الذكاء الاصطناعي مستقبل الرعاية الصحية في المنطقة",
    excerpt: "تطبيقات جديدة للذكاء الاصطناعي تساعد الأطباء على تشخيص الأمراض بدقة أكبر وتقديم رعاية شخصية للمرضى...",
    category: "تطبيقات",
    author: "فاطمة الخالد",
    date: "١٦ يوليو ٢٠٢٤",
    slug: "ai-healthcare-future",
  },
  {
    id: 2,
    title: "نقاش حول التحيز الخوارزمي في أنظمة التوظيف الآلي",
    excerpt: "دراسة جديدة تكشف عن تحديات التحيز في خوارزميات التوظيف وتقترح حلولاً لتحسين العدالة في عمليات الاختيار...",
    category: "أخلاقيات",
    author: "يوسف المنصور",
    date: "٣١ يونيو ٢٠٢٤",
    slug: "algorithmic-bias-hiring",
  },
  {
    id: 3,
    title: "شركة ناشئة في الرياض تطور روبوتات للخدمات اللوجستية",
    excerpt:
      'تمكنت شركة "تقنية المستقبل" من تطوير روبوتات ذكية قادرة على التنقل في المستودعات وتنظيم عمليات الشحن بكفاءة عالية...',
    category: "أبحاث",
    author: "علياء الشمري",
    date: "١٤ يونيو ٢٠٢٤",
    slug: "riyadh-logistics-robots",
  },
]

export default function GridPosts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Post image */}
          <div className="h-48 w-full relative">
            <Image
              src={`/placeholder.svg?height=400&width=600&text=${post.id}`}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Post content */}
          <div className="p-6">
            <div className="text-sm font-medium text-blue-600 mb-2">{post.category}</div>
            <Link href={`/blog/${post.slug}`} className="block">
              <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition">{post.title}</h3>
            </Link>
            <p className="text-gray-600 mb-6">{post.excerpt}</p>

            {/* Author info */}
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden relative">
                <Image src="/placeholder.svg?height=100&width=100" alt={post.author} fill className="object-cover" />
              </div>
              <div className="mr-4">
                <p className="text-sm font-medium text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

