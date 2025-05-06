import Header from "@/components/header"
import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      title: "تطوير تطبيقات الذكاء الاصطناعي",
      description: "نقوم بتطوير تطبيقات ذكية مخصصة تلبي احتياجات عملك وتعزز كفاءة العمليات.",
      features: [
        "تطوير تطبيقات مخصصة بالكامل",
        "دمج تقنيات الذكاء الاصطناعي المتقدمة",
        "واجهات مستخدم سهلة الاستخدام",
        "تكامل مع الأنظمة الحالية",
      ],
      image: "/placeholder.svg?height=600&width=800&text=خدمة1",
    },
    {
      title: "تحليل البيانات والرؤى",
      description: "نحول البيانات الخام إلى رؤى قيمة تساعدك على اتخاذ قرارات أفضل وأسرع.",
      features: [
        "تحليل البيانات الضخمة",
        "تطوير لوحات معلومات تفاعلية",
        "تنبؤات دقيقة باستخدام تعلم الآلة",
        "تقارير مخصصة وتحليلات متقدمة",
      ],
      image: "/placeholder.svg?height=600&width=800&text=خدمة2",
    },
    {
      title: "استشارات الذكاء الاصطناعي",
      description: "نقدم استشارات متخصصة لمساعدتك على فهم وتبني تقنيات الذكاء الاصطناعي بفعالية.",
      features: [
        "تقييم احتياجات العمل",
        "استراتيجيات تبني الذكاء الاصطناعي",
        "تدريب الفرق وبناء القدرات",
        "تقييم الحلول الحالية وتحسينها",
      ],
      image: "/placeholder.svg?height=600&width=800&text=خدمة3",
    },
  ]

  const pricingPlans = [
    {
      name: "أساسي",
      price: "٥٠٠",
      description: "للشركات الصغيرة والمشاريع الناشئة",
      features: ["تحليل بيانات أساسي", "تطوير نموذج ذكاء اصطناعي بسيط", "دعم فني لمدة شهر", "تقرير شهري واحد"],
    },
    {
      name: "احترافي",
      price: "١٥٠٠",
      description: "للشركات المتوسطة والمشاريع المتنامية",
      features: [
        "تحليل بيانات متقدم",
        "تطوير نموذج ذكاء اصطناعي مخصص",
        "دعم فني لمدة ٣ أشهر",
        "تقارير شهرية",
        "تدريب الفريق",
      ],
      featured: true,
    },
    {
      name: "متقدم",
      price: "٣٠٠٠",
      description: "للشركات الكبيرة والمشاريع المتطورة",
      features: [
        "تحليل بيانات شامل ومتقدم",
        "تطوير نماذج ذكاء اصطناعي متعددة",
        "دعم فني مستمر",
        "تقارير أسبوعية",
        "تدريب شامل للفريق",
        "استشارات استراتيجية",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      <main>
        <PageHeader title="خدمات" />

        <div className="container mx-auto px-4 py-16">
          {/* Services Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">خدماتنا المتخصصة في الذكاء الاصطناعي</h2>
            <p className="text-xl text-gray-700">
              نقدم مجموعة متكاملة من خدمات الذكاء الاصطناعي المصممة خصيصًا لتلبية احتياجات عملك وتحقيق أهدافك.
            </p>
          </div>

          {/* Detailed Services */}
          <div className="space-y-20 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-12`}
              >
                <div className="md:w-1/2 relative h-80 w-full rounded-lg overflow-hidden">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-1 ml-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white">اطلب الخدمة</Button>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Plans */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">باقات الأسعار</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl ${
                    plan.featured ? "ring-2 ring-blue-600 shadow-xl" : "shadow-md"
                  } p-8 relative`}
                >
                  {plan.featured && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      الأكثر شيوعًا
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600"> / شهريًا</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-1 ml-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.featured ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-800 hover:bg-gray-900"
                    } text-white`}
                  >
                    اختر الباقة
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">ماذا يقول عملاؤنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "ساعدنا فريق أخبار الذكاء الاصطناعي في تطوير نظام توصيات ذكي أدى إلى زيادة مبيعاتنا بنسبة 40%.",
                  author: "أحمد السعيد",
                  position: "المدير التنفيذي، شركة التجارة الإلكترونية",
                },
                {
                  quote:
                    "الاستشارات التي قدموها لنا كانت قيمة للغاية وساعدتنا على فهم كيفية تطبيق الذكاء الاصطناعي في أعمالنا.",
                  author: "نورة الفهد",
                  position: "مديرة التحول الرقمي، شركة اتصالات",
                },
                {
                  quote:
                    "تحليل البيانات الذي قدموه ساعدنا على اتخاذ قرارات أفضل وأسرع، مما أدى إلى تحسين كفاءة العمليات.",
                  author: "خالد المنصور",
                  position: "مدير العمليات، شركة لوجستية",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="text-3xl text-gray-400 mb-4">"</div>
                  <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden relative">
                      <Image
                        src={`/placeholder.svg?height=100&width=100&text=${index + 1}`}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mr-4">
                      <p className="font-medium text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">مستعد للبدء؟</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              تواصل معنا اليوم لمناقشة كيف يمكننا مساعدتك في تحقيق أهدافك باستخدام تقنيات الذكاء الاصطناعي المتقدمة.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-full">
              احصل على استشارة مجانية
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

