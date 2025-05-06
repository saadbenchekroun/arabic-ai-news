import { Search } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative py-16 sm:py-24">
      {/* Background with gradient and decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 opacity-90"></div>

        {/* Decorative elements */}
        <div className="absolute inset-0">
          <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <circle cx="850" cy="150" r="120" fill="rgba(255,255,255,0.1)" />
            <circle cx="150" cy="850" r="180" fill="rgba(255,255,255,0.1)" />
            <path d="M0,0 L1000,1000" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
            <path d="M1000,0 L0,1000" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">المدونة</h1>
        <div className="w-24 h-1 bg-white mx-auto mb-8"></div>

        {/* Search bar */}
        <div className="max-w-2xl mx-auto px-4">
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-full bg-white py-3 px-4 pr-10 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="بحث"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

