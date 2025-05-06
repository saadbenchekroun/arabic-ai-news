"use client"

import { useState } from "react"
import { Menu, BookOpen, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import RelatedArticles from "./related-articles"
import LearningResources from "./learning-resources"

interface Article {
  id: number
  title: string
  excerpt: string
  slug: string
  image: string
  readingTime: string
  category: string
}

export default function MobileSidebarMenu({
  relatedArticles,
  recommendedArticles,
}: {
  relatedArticles: Article[]
  recommendedArticles: Article[]
}) {
  const [activeTab, setActiveTab] = useState<"related" | "resources">("related")

  return (
    <div className="fixed bottom-4 left-4 z-50 md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="rounded-full h-12 w-12 bg-blue-600 hover:bg-blue-700 shadow-lg">
            <Menu className="h-6 w-6" />
            <span className="sr-only">فتح القائمة</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[85vw] sm:w-[350px] p-0">
          <div className="flex flex-col h-full">
            <div className="flex border-b border-gray-200">
              <button
                className={`flex-1 py-3 px-4 text-center font-medium ${
                  activeTab === "related" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
                }`}
                onClick={() => setActiveTab("related")}
              >
                <BookOpen className="h-5 w-5 mx-auto mb-1" />
                مقالات ذات صلة
              </button>
              <button
                className={`flex-1 py-3 px-4 text-center font-medium ${
                  activeTab === "resources" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
                }`}
                onClick={() => setActiveTab("resources")}
              >
                <Bookmark className="h-5 w-5 mx-auto mb-1" />
                مصادر التعلم
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4">
              {activeTab === "related" ? (
                <RelatedArticles articles={relatedArticles} recommended={recommendedArticles} />
              ) : (
                <LearningResources />
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

