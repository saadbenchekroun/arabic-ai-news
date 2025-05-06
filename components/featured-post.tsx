import Image from "next/image"
import Link from "next/link"

export default function FeaturedPost() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="md:flex">
        {/* Image (on the right for RTL) */}
        <div className="md:flex-shrink-0 md:w-1/2">
          <div className="h-64 md:h-full w-full relative">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="نموذج لغوي عربي متقدم"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content (on the left for RTL) */}
        <div className="p-8 md:w-1/2">
          <div className="text-sm font-medium text-blue-600 mb-2">تعلم الآلة</div>
          <Link href="/blog/advanced-arabic-model" className="block">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition">
              إطلاق نموذج لغوي عربي متقدم بقدرات فهم سياقية غير مسبوقة
            </h2>
          </Link>
          <p className="text-gray-600 mb-6">
            بعد سنوات من البحث، كشف فريق من العلماء العرب عن نموذج 'نور-5' الذي يُظهر دقة فائقة في فهم اللهجات العربية
            المختلفة وتوليد نصوص إبداعية. يعتبر هذا النموذج نقلة نوعية في مجال الذكاء الاصطناعي للغة العربية...
          </p>

          {/* Author info */}
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden relative">
              <Image src="/placeholder.svg?height=100&width=100" alt="محمد الأحمدي" fill className="object-cover" />
            </div>
            <div className="mr-4">
              <p className="text-sm font-medium text-gray-900">محمد الأحمدي</p>
              <p className="text-sm text-gray-500">٢٧ يونيو ٢٠٢٤</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

