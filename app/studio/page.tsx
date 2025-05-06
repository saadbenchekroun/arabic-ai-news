import Header from "@/components/header"
import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function StudioPage() {
  const services = [
    {
      title: "تصميم تجربة المستخدم للذكاء الاصطناعي",
      description: "نصمم واجهات مستخدم سهلة الاستخدام وجذابة لتطبيقات الذكاء الاصطناعي، مع التركيز على تجربة المستخدم.",
      icon: "🎨",
    },
    {
      title: "تطوير نماذج الذكاء الاصطناعي",
      description: "نقوم بتطوير وتدريب نماذج ذكاء اصطناعي مخصصة لتلبية احتياجات عملك الفريدة.",
      icon: "🤖",
    },
    {
      title: "تحليل البيانات والرؤى",
      description: "نحول البيانات الخام إلى رؤى قابلة للتنفيذ باستخدام تقنيات الذكاء الاصطناعي المتقدمة.",
      icon: "📊",
    },
    {
      title: "استشارات الذكاء الاصطناعي",
      description: "نقدم استشارات متخصصة لمساعدة الشركات على تبني واستخدام تقنيات الذكاء الاصطناعي بفعالية.",
      icon: "💡",
    },
  ]

  const projects = [
    {
      title: "نظام توصيات ذكي",
      client: "شركة التجارة الإلكترونية الرائدة",
      description: "تطوير نظام توصيات مخصص يستخدم تعلم الآلة لتحسين تجربة التسوق وزيادة المبيعات بنسبة 35%.",
      image: "/placeholder.svg?height=600&width=800&text=مشروع1",
    },
    {
      title: "روبوت محادثة للخدمة العملاء",
      client: "مزود خدمات الاتصالات",
      description: "تصميم وتطوير روبوت محادثة ذكي يدعم اللغة العربية لتحسين خدمة العملاء وتقليل وقت الانتظار.",
      image: "/placeholder.svg?height=600&width=800&text=مشروع2",
    },
    {
      title: "نظام تحليل المشاعر",
      client: "وكالة إعلامية",
      description:
        "تطوير نظام لتحليل مشاعر المستخدمين على وسائل التواصل الاجتماعي باللغة العربية لقياس ردود الفعل تجاه الحملات الإعلانية.",
      image: "/placeholder.svg?height=600&width=800&text=مشروع3",
    },
  ]

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      <main>
        <PageHeader title="استوديو إبداعي" />

        <div className="container mx-auto px-4 py-16">
          {/* Studio Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">نحول أفكارك إلى حلول ذكية</h2>
            <p className="text-xl text-gray-700">
              استوديو الإبداع لدينا يجمع بين الخبرة التقنية والرؤية الإبداعية لتطوير حلول ذكاء اصطناعي مبتكرة تلبي
              احتياجات عملك وتتجاوز توقعاتك.
            </p>
          </div>

          {/* Services */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">خدماتنا الإبداعية</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">مشاريعنا المميزة</h2>
            <div className="space-y-16">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8`}
                >
                  <div className="md:w-1/2 relative h-80 w-full rounded-lg overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-blue-600 mb-4">العميل: {project.client}</p>
                    <p className="text-gray-700 mb-6">{project.description}</p>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">عرض التفاصيل</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">هل لديك مشروع في ذهنك؟</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              دعنا نساعدك في تحويل فكرتك إلى حقيقة. فريقنا من الخبراء جاهز لتقديم حلول مبتكرة تناسب احتياجاتك.
            </p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-full">
              تواصل معنا الآن
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

