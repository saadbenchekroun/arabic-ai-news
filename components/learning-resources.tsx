"use client"

import type React from "react"

import { useState } from "react"
import { Book, Github, Linkedin, Youtube, FileText, ChevronDown, Bookmark, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Resource {
  id: string
  title: string
  url: string
  description?: string
  meta?: string
}

interface ResourceCategory {
  id: string
  title: string
  icon: React.ReactNode
  resources: Resource[]
}

export default function LearningResources() {
  const [openCategory, setOpenCategory] = useState<string>("docs")
  const [bookmarked, setBookmarked] = useState<string[]>([])

  const categories: ResourceCategory[] = [
    {
      id: "docs",
      title: "وثائق رسمية",
      icon: <Book className="h-5 w-5" />,
      resources: [
        {
          id: "react",
          title: "React.js",
          url: "https://reactjs.org",
          description: "الوثائق الرسمية لمكتبة React.js",
        },
        {
          id: "nextjs",
          title: "Next.js",
          url: "https://nextjs.org",
          description: "إطار عمل React للإنتاج",
        },
      ],
    },
    {
      id: "github",
      title: "مستودعات GitHub",
      icon: <Github className="h-5 w-5" />,
      resources: [
        {
          id: "tensorflow",
          title: "TensorFlow",
          url: "https://github.com/tensorflow/tensorflow",
          meta: "⭐ 177k",
        },
        {
          id: "pytorch",
          title: "PyTorch",
          url: "https://github.com/pytorch/pytorch",
          meta: "⭐ 69k",
        },
      ],
    },
    {
      id: "linkedin",
      title: "ملفات LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      resources: [
        {
          id: "andrew-ng",
          title: "أندرو نج",
          url: "https://www.linkedin.com/in/andrewyng/",
          description: "خبير في الذكاء الاصطناعي وتعلم الآلة",
        },
        {
          id: "yann-lecun",
          title: "يان لوكون",
          url: "https://www.linkedin.com/in/yann-lecun-0b999/",
          description: "رائد في مجال التعلم العميق",
        },
      ],
    },
    {
      id: "youtube",
      title: "دروس YouTube",
      icon: <Youtube className="h-5 w-5" />,
      resources: [
        {
          id: "ai-course",
          title: "دورة الذكاء الاصطناعي للمبتدئين",
          url: "https://www.youtube.com/watch?v=example1",
        },
        {
          id: "ml-course",
          title: "تعلم الآلة من الصفر",
          url: "https://www.youtube.com/watch?v=example2",
        },
      ],
    },
    {
      id: "papers",
      title: "أوراق بحثية",
      icon: <FileText className="h-5 w-5" />,
      resources: [
        {
          id: "attention",
          title: "آلية الانتباه في الشبكات العصبية",
          url: "https://example.com/paper1.pdf",
        },
        {
          id: "transformers",
          title: "نماذج المحولات للغة الطبيعية",
          url: "https://example.com/paper2.pdf",
        },
      ],
    },
  ]

  const toggleBookmark = (id: string) => {
    if (bookmarked.includes(id)) {
      setBookmarked(bookmarked.filter((item) => item !== id))
    } else {
      setBookmarked([...bookmarked, id])
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h3 className="font-bold text-gray-900 mb-4">مصادر التعلم</h3>

      <div className="space-y-3">
        {categories.map((category) => (
          <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className={`w-full flex items-center justify-between p-3 text-right ${
                openCategory === category.id ? "bg-gray-50" : "bg-white"
              }`}
              onClick={() => setOpenCategory(openCategory === category.id ? "" : category.id)}
            >
              <div className="flex items-center">
                <span className="ml-2 text-blue-600">{category.icon}</span>
                <span className="font-medium">{category.title}</span>
              </div>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${openCategory === category.id ? "transform rotate-180" : ""}`}
              />
            </button>

            {openCategory === category.id && (
              <div className="p-3 border-t border-gray-200 bg-gray-50">
                <ul className="space-y-3">
                  {category.resources.map((resource) => (
                    <li key={resource.id} className="relative">
                      <div className="flex justify-between items-start">
                        <div>
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-gray-900 hover:text-blue-600 flex items-center"
                          >
                            {resource.title}
                            <ExternalLink className="h-3 w-3 mr-1 inline" />
                          </a>
                          {resource.description && <p className="text-sm text-gray-600 mt-1">{resource.description}</p>}
                          {resource.meta && <span className="text-xs text-gray-500 mt-1 block">{resource.meta}</span>}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 absolute top-0 left-0"
                          onClick={() => toggleBookmark(resource.id)}
                        >
                          <Bookmark
                            className={`h-4 w-4 ${
                              bookmarked.includes(resource.id) ? "fill-blue-600 text-blue-600" : "text-gray-400"
                            }`}
                          />
                          <span className="sr-only">
                            {bookmarked.includes(resource.id) ? "إزالة من المحفوظات" : "حفظ للمستقبل"}
                          </span>
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {bookmarked.length > 0 && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-blue-700 mb-2">المحفوظات ({bookmarked.length})</h4>
          <ul className="space-y-1">
            {bookmarked.map((id) => {
              const resource = categories.flatMap((cat) => cat.resources).find((res) => res.id === id)

              if (!resource) return null

              return (
                <li key={id} className="text-sm">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {resource.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

