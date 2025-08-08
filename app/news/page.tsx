"use client";

import { useState, useEffect, useRef } from "react";
import { Clock, User, ChevronRight } from "lucide-react";

// Mock data - can be replaced with API call later
const mockNewsData = [
  {
    id: 1,
    title: "Revolutionary AI Technology Transforms Healthcare Industry",
    summary:
      "New artificial intelligence breakthrough promises to revolutionize patient care and medical diagnostics worldwide.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Sarah Johnson",
    publishedAt: "2024-01-15T10:30:00Z",
    category: "Technology",
    featured: false,
  },
  {
    id: 2,
    title: "Global Climate Summit Reaches Historic Agreement",
    summary:
      "World leaders unite on ambitious climate goals for the next decade.",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Michael Chen",
    publishedAt: "2024-01-14T14:20:00Z",
    category: "Environment",
    featured: false,
  },
  {
    id: 3,
    title: "Stock Markets Hit Record Highs Amid Economic Recovery",
    summary:
      "Major indices surge as investors show confidence in economic outlook.",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Emma Rodriguez",
    publishedAt: "2024-01-14T09:15:00Z",
    category: "Finance",
    featured: false,
  },
  {
    id: 4,
    title: "Space Mission Discovers New Exoplanets",
    summary:
      "NASA's latest mission identifies potentially habitable worlds beyond our solar system.",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Dr. James Wilson",
    publishedAt: "2024-01-13T16:45:00Z",
    category: "Exploration",
    featured: false,
  },
  {
    id: 5,
    title: "Olympic Games Preparation Enters Final Phase",
    summary:
      "Athletes and organizers make final preparations for the upcoming international competition.",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    author: "Lisa Park",
    publishedAt: "2024-01-13T11:30:00Z",
    category: "Health & Safety",
    featured: false,
  },
  {
    id: 6,
    title: "New Educational Initiative Launches Nationwide",
    summary:
      "Government announces comprehensive program to enhance digital literacy in schools.",
    content:
      "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
    author: "Robert Kim",
    publishedAt: "2024-01-12T13:20:00Z",
    category: "Community",
    featured: false,
  },
  // Additional mock data for animation effect
  {
    id: 7,
    title: "Breakthrough in Renewable Energy Storage",
    summary: "Scientists develop new battery technology for solar and wind.",
    content: "Innovative storage solutions could accelerate the green energy transition.",
    author: "Priya Singh",
    publishedAt: "2024-01-11T08:00:00Z",
    category: "Technology",
    featured: false,
  },
  {
    id: 8,
    title: "Major River Cleanup Project Launched",
    summary: "Volunteers gather to restore local waterways.",
    content: "Community-driven efforts aim to improve water quality and wildlife habitat.",
    author: "Carlos Mendez",
    publishedAt: "2024-01-10T15:30:00Z",
    category: "Environment",
    featured: false,
  },
  {
    id: 9,
    title: "Central Bank Adjusts Interest Rates",
    summary: "Policy shift expected to impact loans and savings.",
    content: "Economists weigh in on the potential effects for consumers and businesses.",
    author: "Anna Lee",
    publishedAt: "2024-01-09T12:10:00Z",
    category: "Finance",
    featured: false,
  },
  {
    id: 10,
    title: "Mars Rover Sends New Images",
    summary: "Stunning photos reveal Martian landscape in detail.",
    content: "The rover's discoveries continue to excite scientists and the public alike.",
    author: "Tom Baker",
    publishedAt: "2024-01-08T18:40:00Z",
    category: "Projects",
    featured: false,
  },
  {
    id: 11,
    title: "National Soccer Team Wins Championship",
    summary: "Fans celebrate historic victory in dramatic final.",
    content: "The team's journey inspires a new generation of athletes.",
    author: "Maria Rossi",
    publishedAt: "2024-01-07T21:00:00Z",
    category: "Health & Safety",
    featured: false,
  },
  {
    id: 12,
    title: "STEM Program Expands to Rural Schools",
    summary: "New funding brings technology education to underserved areas.",
    content: "Students gain access to robotics, coding, and science labs.",
    author: "David Brown",
    publishedAt: "2024-01-06T10:25:00Z",
    category: "Community",
    featured: false,
  },
  {
    id: 13,
    title: "AI-Powered Language App Released",
    summary: "App helps users learn new languages faster and more efficiently.",
    content: "Machine learning personalizes lessons for each learner.",
    author: "Emily Clark",
    publishedAt: "2024-01-05T09:00:00Z",
    category: "Corporate",
    featured: false,
  },
  {
    id: 14,
    title: "Wildlife Reserve Reports Record Bird Migration",
    summary: "Conservation efforts credited for increase in bird populations.",
    content: "Researchers document rare species returning to the area.",
    author: "Siti Rahma",
    publishedAt: "2024-01-04T13:45:00Z",
    category: "Environment",
    featured: false,
  },
  {
    id: 15,
    title: "Cryptocurrency Market Volatility Continues",
    summary: "Investors face uncertainty amid rapid price swings.",
    content: "Experts advise caution and diversification.",
    author: "John Smith",
    publishedAt: "2024-01-03T11:15:00Z",
    category: "Finance",
    featured: false,
  },
  {
    id: 16,
    title: "New Particle Discovered at Large Collider",
    summary: "Physicists celebrate breakthrough in fundamental science.",
    content: "The discovery could reshape our understanding of the universe.",
    author: "Wei Zhang",
    publishedAt: "2024-01-02T17:30:00Z",
    category: "Operations",
    featured: false,
  },
  {
    id: 17,
    title: "Tennis Star Announces Retirement",
    summary: "Champion athlete leaves legacy of sportsmanship and excellence.",
    content: "Fans and fellow players pay tribute to a remarkable career.",
    author: "Olga Petrova",
    publishedAt: "2024-01-01T20:00:00Z",
    category: "Health & Safety",
    featured: false,
  },
  {
    id: 18,
    title: "Online Learning Platform Reaches 1 Million Users",
    summary: "Milestone highlights growing demand for digital education.",
    content: "The platform offers courses in a wide range of subjects.",
    author: "Lucas Martin",
    publishedAt: "2023-12-31T08:30:00Z",
    category: "Corporate",
    featured: false,
  },
];

const categoryColors = {
  Technology: "bg-cyan-500",
  Environment: "bg-emerald-500",
  Finance: "bg-amber-500",
  Exploration: "bg-violet-500",
  "Health & Safety": "bg-rose-500",
  Community: "bg-blue-500",
  Corporate: "bg-gray-500",
  Projects: "bg-yellow-600",
  Operations: "bg-green-700",
};

export default function NewsPage() {
  const [news, setNews] = useState(mockNewsData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [leavingIds, setLeavingIds] = useState<number[]>([]);
  const pendingCategory = useRef<string | null>(null);

  // Function to fetch news - can be replaced with actual API call
  const fetchNews = (category = "All") => {
    // Filter mock data by category
    const filteredNews =
      category === "All"
        ? mockNewsData
        : mockNewsData.filter((article) => article.category === category);
    setNews(filteredNews);
  };

  // Handle filter with animation
  const handleCategoryChange = (category: string) => {
    if (category === selectedCategory) return;
    // Find which articles will be removed
    const filteredNews =
      category === "All"
        ? mockNewsData
        : mockNewsData.filter((article) => article.category === category);
    const leaving = news.filter(
      (article) => !filteredNews.some((a) => a.id === article.id)
    );
    if (leaving.length === 0) {
      setSelectedCategory(category);
      return;
    }
    setLeavingIds(leaving.map((a) => a.id));
    pendingCategory.current = category;
  };

  // When leavingIds changes, set a timeout to change the category after animation
  useEffect(() => {
    if (leavingIds.length === 0) return;
    const timeout = setTimeout(() => {
      setLeavingIds([]);
      if (pendingCategory.current) {
        setSelectedCategory(pendingCategory.current);
        pendingCategory.current = null;
      }
    }, 350); // match CSS duration
    return () => clearTimeout(timeout);
  }, [leavingIds]);

  useEffect(() => {
    fetchNews(selectedCategory);
  }, [selectedCategory]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const categories = [
    "All",
    ...Array.from(new Set(mockNewsData.map((article) => article.category))),
  ];
  const regularNews = news;

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="">
        <div className="max-w-7xl mx-auto px-4 lg:px-0 pb-8 pt-20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white tracking-tight">
                NEWS
              </h1>
              <p className="text-lg text-gray-300 mt-1">
                Stay informed with the latest updates
              </p>
            </div>
            
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 lg:px-0 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-3 font-semibold text-sm uppercase tracking-wide transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* No loading state, show grid directly */}
        <>
          {/* Regular News Grid */}
          {regularNews.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide">
                Latest News
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularNews.map((article) => (
                  <article
                    key={article.id}
                    className={`bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer border border-gray-700 filter-anim-item ${
                      leavingIds.includes(article.id) ? "leaving" : ""
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={`https://picsum.photos/600/400?random=${article?.id || Math.random()}`}
                        alt={article.title}
                        className="w-full h-48 object-cover"
                      />
                      <div
                        className={`absolute top-3 left-3 px-2 py-1 text-white text-xs font-semibold uppercase ${
                          categoryColors[article.category as keyof typeof categoryColors] || 'bg-gray-500'
                        }`}
                      >
                        {article.category}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {article.summary}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {formatDate(article.publishedAt)}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {news.length === 0 && (
            <div className="text-center py-12">
              <div className="text-xl font-semibold text-gray-300 mb-2">
                No news found
              </div>
              <p className="text-gray-400">
                Try selecting a different category
              </p>
            </div>
          )}
        </>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white mt-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2 text-cyan-400">NEWS</h3>
            <p className="text-gray-400">
              Your trusted source for breaking news and updates
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .filter-anim-item {
          transition: opacity 0.35s cubic-bezier(0.4,0.2,0.2,1), transform 0.35s cubic-bezier(0.4,0.2,0.2,1);
          opacity: 1;
          transform: scale(1);
        }
        .filter-anim-item.leaving {
          opacity: 0;
          transform: scale(0.8) translateY(30px);
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
