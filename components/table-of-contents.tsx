"use client"

import { useState, useEffect } from "react"
import { Link } from "lucide-react"

interface TOCItem {
  id: string
  title: string
  level: number
}

export default function TableOfContents({ items }: { items: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -80% 0px" },
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [items])

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <div className="flex items-center mb-4">
        <Link className="h-5 w-5 ml-2 text-blue-600" />
        <h3 className="font-bold text-gray-900">جدول المحتويات</h3>
      </div>
      <nav>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} style={{ paddingRight: `${(item.level - 1) * 0.75}rem` }}>
              <a
                href={`#${item.id}`}
                className={`block py-1 border-r-2 pr-2 text-sm transition hover:text-blue-600 ${
                  activeId === item.id
                    ? "border-blue-600 text-blue-600 font-medium"
                    : "border-transparent text-gray-600"
                }`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

