import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import TableOfContents from "@/components/table-of-contents"
import RelatedArticles from "@/components/related-articles"
import LearningResources from "@/components/learning-resources"
import MobileSidebarMenu from "@/components/mobile-sidebar-menu"

// This would normally come from a database or CMS
const getArticleData = (slug: string) => {
  // Sample article data
  const articles = {
    "advanced-arabic-model": {
      id: 1,
      title: "إطلاق نموذج لغوي عربي متقدم بقدرات فهم سياقية غير مسبوقة",
      excerpt:
        'بعد سنوات من البحث، كشف فريق من العلماء العرب عن نموذج "نور-5" الذي يُظهر دقة فائقة في فهم اللهجات العربية المختلفة وتوليد نصوص إبداعية.',
      content: `
        <p>بعد سنوات من البحث والتطوير المكثف، أعلن فريق من العلماء والباحثين العرب عن إطلاق نموذج لغوي عربي متقدم أطلقوا عليه اسم "نور-5". يتميز هذا النموذج بقدرات غير مسبوقة في فهم السياق اللغوي للنصوص العربية بمختلف لهجاتها، وإنتاج محتوى إبداعي يحاكي الأسلوب البشري.</p>
        
        <h2 id="capabilities">قدرات النموذج الجديد</h2>
        <p>يتفوق نموذج "نور-5" على النماذج السابقة في عدة جوانب أساسية:</p>
        <ul>
          <li>فهم متقدم للهجات العربية المختلفة من المشرق إلى المغرب العربي.</li>
          <li>القدرة على التعامل مع النصوص الأدبية والعلمية بكفاءة عالية.</li>
          <li>إنتاج محتوى إبداعي يراعي خصوصية الثقافة العربية.</li>
          <li>تحليل المشاعر في النصوص العربية بدقة تصل إلى 95%.</li>
        </ul>
        
        <h2 id="development">مراحل التطوير</h2>
        <p>استغرق تطوير النموذج أكثر من ثلاث سنوات، وتضمنت عملية التطوير المراحل التالية:</p>
        <ol>
          <li>جمع وتنظيف مجموعة بيانات ضخمة من النصوص العربية تتجاوز 500 مليار كلمة.</li>
          <li>تدريب النموذج الأولي على بنية محولات متقدمة مع تعديلات خاصة للغة العربية.</li>
          <li>تحسين النموذج من خلال التعلم المعزز بالتغذية الراجعة البشرية.</li>
          <li>اختبار النموذج في سيناريوهات واقعية متنوعة.</li>
        </ol>
        
        <h2 id="applications">تطبيقات عملية</h2>
        <p>يمكن استخدام نموذج "نور-5" في مجموعة واسعة من التطبيقات العملية، منها:</p>
        <ul>
          <li>أنظمة الترجمة الآلية بين اللغة العربية واللغات الأخرى.</li>
          <li>مساعدات افتراضية ذكية تفهم وتتحدث اللغة العربية بطلاقة.</li>
          <li>أدوات تحليل المحتوى والتلخيص الآلي للنصوص العربية.</li>
          <li>أنظمة تعليمية تفاعلية للغة العربية.</li>
        </ul>
        
        <h2 id="challenges">التحديات والصعوبات</h2>
        <p>واجه فريق التطوير عدة تحديات خلال العمل على النموذج، أبرزها:</p>
        <ul>
          <li>تعقيد قواعد اللغة العربية وتنوع تراكيبها.</li>
          <li>التعامل مع التنوع اللهجي الكبير في العالم العربي.</li>
          <li>نقص الموارد الحاسوبية المتاحة مقارنة بالنماذج الغربية.</li>
          <li>الحاجة إلى تطوير معايير تقييم خاصة باللغة العربية.</li>
        </ul>
        
        <h2 id="future">آفاق مستقبلية</h2>
        <p>يخطط الفريق لمواصلة تطوير النموذج في المراحل القادمة، مع التركيز على:</p>
        <ul>
          <li>توسيع قدرات النموذج ليشمل فهم الصور والفيديو مع النص العربي.</li>
          <li>تحسين كفاءة النموذج للعمل على الأجهزة ذات الموارد المحدودة.</li>
          <li>تطوير واجهات برمجية سهلة الاستخدام للمطورين.</li>
          <li>إتاحة نسخة مفتوحة المصدر للباحثين والمطورين.</li>
        </ul>
        
        <h2 id="conclusion">الخلاصة</h2>
        <p>يمثل نموذج "نور-5" خطوة مهمة في مسار تطوير الذكاء الاصطناعي للغة العربية، ويفتح آفاقاً جديدة للتطبيقات العملية في مختلف المجالات. كما يعزز من حضور اللغة العربية في عالم التكنولوجيا والذكاء الاصطناعي، ويساهم في الحفاظ على الهوية الثقافية العربية في العصر الرقمي.</p>
      `,
      author: "محمد الأحمدي",
      date: "٢٧ يونيو ٢٠٢٤",
      readingTime: "١٠ دقائق",
      category: "تعلم الآلة",
      image: "/placeholder.svg?height=600&width=800&text=نموذج_لغوي_عربي",
      slug: "advanced-arabic-model",
    },
  }

  return articles[slug as keyof typeof articles]
}

// Sample related articles
const relatedArticles = [
  {
    id: 2,
    title: "مقارنة بين نماذج اللغة العربية: GPT-4 مقابل نور-5",
    excerpt: "تحليل مفصل لأداء نماذج اللغة العربية المختلفة في مهام متنوعة.",
    slug: "arabic-models-comparison",
    image: "/placeholder.svg?height=400&width=600&text=مقارنة",
    readingTime: "٨ دقائق",
    category: "تعلم الآلة",
  },
  {
    id: 3,
    title: "تقنيات معالجة اللغة العربية الطبيعية في 2024",
    excerpt: "استعراض لأحدث التقنيات المستخدمة في معالجة اللغة العربية.",
    slug: "arabic-nlp-techniques",
    image: "/placeholder.svg?height=400&width=600&text=تقنيات",
    readingTime: "١٢ دقيقة",
    category: "معالجة اللغات الطبيعية",
  },
  {
    id: 4,
    title: "كيف تستفيد الشركات العربية من نماذج اللغة المتقدمة",
    excerpt: "دراسة حالات عملية لاستخدام نماذج اللغة في الأعمال التجارية.",
    slug: "business-applications",
    image: "/placeholder.svg?height=400&width=600&text=أعمال",
    readingTime: "٧ دقائق",
    category: "تطبيقات",
  },
]

// Sample recommended articles
const recommendedArticles = [
  {
    id: 5,
    title: "مستقبل التعليم مع تقنيات الذكاء الاصطناعي",
    excerpt: "كيف يمكن للذكاء الاصطناعي تغيير طرق التعليم التقليدية.",
    slug: "ai-education-future",
    image: "/placeholder.svg?height=400&width=600&text=تعليم",
    readingTime: "٩ دقائق",
    category: "تطبيقات",
  },
  {
    id: 6,
    title: "أخلاقيات استخدام الذكاء الاصطناعي في المجتمعات العربية",
    excerpt: "نقاش حول القضايا الأخلاقية المرتبطة بتقنيات الذكاء الاصطناعي.",
    slug: "ai-ethics-arabic",
    image: "/placeholder.svg?height=400&width=600&text=أخلاقيات",
    readingTime: "١١ دقيقة",
    category: "أخلاقيات",
  },
]

// Table of contents items
const tocItems = [
  { id: "capabilities", title: "قدرات النموذج الجديد", level: 2 },
  { id: "development", title: "مراحل التطوير", level: 2 },
  { id: "applications", title: "تطبيقات عملية", level: 2 },
  { id: "challenges", title: "التحديات والصعوبات", level: 2 },
  { id: "future", title: "آفاق مستقبلية", level: 2 },
  { id: "conclusion", title: "الخلاصة", level: 2 },
]

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleData(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Three-column layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sidebar - Learning Resources (hidden on mobile) */}
          <aside className="hidden md:block lg:w-1/4 space-y-6">
            <TableOfContents items={tocItems} />
            <div className="sticky top-6">
              <LearningResources />
            </div>
          </aside>

          {/* Main content - Article */}
          <article className="lg:w-2/4">
            {/* Article header */}
            <div className="mb-8">
              <Link
                href={`/blog?category=${article.category}`}
                className="inline-block text-sm font-medium text-blue-600 mb-3"
              >
                <Tag className="h-4 w-4 inline ml-1" />
                {article.category}
              </Link>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>

              <p className="text-lg text-gray-600 mb-6">{article.excerpt}</p>

              <div className="flex items-center text-gray-500 text-sm mb-6">
                <div className="flex items-center ml-4">
                  <User className="h-4 w-4 ml-1" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center ml-4">
                  <Calendar className="h-4 w-4 ml-1" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 ml-1" />
                  <span>{article.readingTime}</span>
                </div>
              </div>

              <div className="relative h-80 w-full rounded-xl overflow-hidden mb-8">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>
            </div>

            {/* Article content */}
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />

            {/* Article footer */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden relative">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt={article.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mr-4">
                    <p className="font-medium text-gray-900">{article.author}</p>
                    <p className="text-sm text-gray-500">كاتب ومتخصص في الذكاء الاصطناعي</p>
                  </div>
                </div>

                <div className="flex space-x-4 space-x-reverse">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">مشاركة المقال</Button>
                </div>
              </div>
            </div>
          </article>

          {/* Right sidebar - Related Articles (hidden on mobile) */}
          <aside className="hidden md:block lg:w-1/4">
            <div className="sticky top-6">
              <RelatedArticles articles={relatedArticles} recommended={recommendedArticles} />
            </div>
          </aside>
        </div>
      </main>

      {/* Mobile sidebar menu */}
      <MobileSidebarMenu relatedArticles={relatedArticles} recommendedArticles={recommendedArticles} />
    </div>
  )
}

