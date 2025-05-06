import Header from "@/components/header"
import PageHeader from "@/components/page-header"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      <main>
        <PageHeader title="من نحن" />

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">مهمتنا</h2>
                <p className="text-lg text-gray-700 mb-4">
                  نحن فريق من الخبراء والمتحمسين في مجال الذكاء الاصطناعي، نسعى لتقديم محتوى عربي أصيل وموثوق حول أحدث
                  التطورات والابتكارات في عالم الذكاء الاصطناعي.
                </p>
                <p className="text-lg text-gray-700">
                  هدفنا هو جسر الفجوة المعرفية وتمكين المجتمع العربي من مواكبة الثورة التكنولوجية الحالية من خلال توفير
                  محتوى تعليمي وإخباري بلغة سهلة ومفهومة.
                </p>
              </div>
              <div className="md:w-1/2 relative h-80 w-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=مهمتنا"
                  alt="مهمتنا"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-16">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">قصتنا</h2>
                <p className="text-lg text-gray-700 mb-4">
                  بدأت رحلتنا في عام ٢٠٢٠ عندما لاحظنا نقصًا في المحتوى العربي المتخصص في مجال الذكاء الاصطناعي. كان هناك
                  فجوة كبيرة بين التطورات السريعة في هذا المجال والمحتوى المتاح باللغة العربية.
                </p>
                <p className="text-lg text-gray-700">
                  قررنا إنشاء منصة تجمع بين الدقة العلمية وسهولة الفهم، لتكون مرجعًا موثوقًا للمهتمين والمتخصصين والطلاب
                  في العالم العربي.
                </p>
              </div>
              <div className="md:w-1/2 relative h-80 w-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=قصتنا"
                  alt="قصتنا"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">فريقنا</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "د. أحمد الشمري",
                    role: "مؤسس ورئيس تحرير",
                    bio: "دكتوراه في علوم الحاسب مع خبرة ١٥ عامًا في مجال الذكاء الاصطناعي",
                  },
                  {
                    name: "م. سارة القحطاني",
                    role: "مديرة المحتوى",
                    bio: "مهندسة برمجيات متخصصة في تعلم الآلة وتطبيقات الذكاء الاصطناعي",
                  },
                  {
                    name: "أ. محمد العتيبي",
                    role: "محرر تقني",
                    bio: "باحث في مجال معالجة اللغات الطبيعية مع تركيز على اللغة العربية",
                  },
                ].map((member, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden relative">
                      <Image
                        src={`/placeholder.svg?height=200&width=200&text=${index + 1}`}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">تواصل معنا</h2>
              <p className="text-lg text-gray-700 mb-8">
                نحن دائمًا نرحب بأفكاركم واقتراحاتكم. لا تترددوا في التواصل معنا عبر البريد الإلكتروني أو وسائل التواصل
                الاجتماعي.
              </p>
              <div className="flex justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 text-lg">
                  اتصل بنا
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

