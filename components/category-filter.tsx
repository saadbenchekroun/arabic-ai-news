import { Button } from "@/components/ui/button"

export default function CategoryFilter() {
  const categories = [
    { id: "all", name: "الكل", active: true },
    { id: "ml", name: "تعلم الآلة", active: false },
    { id: "nlp", name: "معالجة اللغات الطبيعية", active: false },
    { id: "cv", name: "رؤية الحاسوب", active: false },
    { id: "ethics", name: "أخلاقيات", active: false },
    { id: "apps", name: "تطبيقات", active: false },
    { id: "research", name: "أبحاث ودراسات", active: false },
  ]

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={category.active ? "default" : "outline"}
            className={`rounded-full px-5 ${category.active ? "bg-blue-600 hover:bg-blue-700" : "text-gray-700"}`}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  )
}

