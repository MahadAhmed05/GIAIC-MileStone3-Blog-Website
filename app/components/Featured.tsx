import Link from "next/link";
import F1 from "../images/post1.jpeg";
import F2 from "../images/post2.png";
import F3 from "../images/post3.jpeg";
import F4 from "../images/post4.jpeg";
import Author1 from "../images/author1.jpg";
import Author2 from "../images/author2.jpg";
import Author3 from "../images/author3.jpg";
import Author4 from "../images/author4.jpg";

export default function FeaturedPosts() {
  return (
    <section className="py-10">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Title */}
        <div className="text-left mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            <span>Featured</span>
          </h2>
        </div>

        {/* Cards Container */}
        <div className="flex flex-wrap -mx-4">
          {/* Card 1 */}
          <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
            <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden h-[400px] md:h-[300px]">
              {/* Thumbnail */}
              <div className="w-full md:w-2/5 bg-gray-300 h-40 md:h-auto">
                <img className="w-full h-full" src={F1.src} alt="" />
              </div>

              {/* Card Content */}
              <div className="w-full md:w-3/5 p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  <Link href="../Posts/Post1">
                    The Future of Web Development: Trends to Watch in 2024
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">
                  Artificial Intelligence (AI) and Machine Learning (ML) are
                  becoming integral to web development.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10">
                      <img className="w-full h-full" src={Author1.src} alt="" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-800">
                        <Link href="author.html">John Doe</Link>
                      </p>
                      <p className="text-sm text-gray-500">
                        22 July 2017 • 6 min read
                      </p>
                    </div>
                  </div>
                  <Link
                    href="../Posts/Post1"
                    className="text-blue-500 hover:underline font-medium"
                  >
                    Read Story
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
            <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden h-[400px] md:h-[300px]">
              {/* Thumbnail */}
              <div className="w-full md:w-2/5 bg-gray-300 h-40 md:h-auto">
                <img className="w-full h-full" src={F2.src} alt="" />
              </div>

              {/* Card Content */}
              <div className="w-full md:w-3/5 p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  <Link href="../Posts/Post2">
                    Top 5 Tools Every Next.js Developer Should Know
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">
                  Next.js has become one of the most popular frameworks for
                  building React-based applications.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10">
                      <img className="w-full h-full" src={Author2.src} alt="" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-800">
                        <Link href="author.html">Jane Smith</Link>
                      </p>
                      <p className="text-sm text-gray-500">
                        22 July 2017 • 6 min read
                      </p>
                    </div>
                  </div>
                  <Link
                    href="../Posts/Post2"
                    className="text-blue-500 hover:underline font-medium"
                  >
                    Read Story
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
            <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden h-[400px] md:h-[300px]">
              {/* Thumbnail */}
              <div className="w-full md:w-2/5 bg-gray-300 h-40 md:h-auto">
                <img className="w-full h-full" src={F3.src} alt="" />
              </div>

              {/* Card Content */}
              <div className="w-full md:w-3/5 p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  <Link href="../Posts/Post3">
                    How to Stay Productive While Learning to Code
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">
                  Learning to code can be a challenging yet rewarding journey.
                  Staying productive during this process is key.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10">
                      <img className="w-full h-full" src={Author3.src} alt="" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-800">
                        <Link href="author.html">Alex Johnson</Link>
                      </p>
                      <p className="text-sm text-gray-500">
                        22 July 2017 • 6 min read
                      </p>
                    </div>
                  </div>
                  <Link
                    href="../Posts/Post3"
                    className="text-blue-500 hover:underline font-medium"
                  >
                    Read Story
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
            <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden h-[400px] md:h-[300px]">
              {/* Thumbnail */}
              <div className="w-full md:w-2/5 bg-gray-300 h-40 md:h-auto">
                <img className="w-full h-full" src={F4.src} alt="" />
              </div>

              {/* Card Content */}
              <div className="w-full md:w-3/5 p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  <Link href="../Posts/Post4">
                    Top 5 Free Resources to Learn Programming Online
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">
                  Learning programming has never been easier, thanks to the
                  abundance of free resources available online..
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10">
                      <img className="w-full h-full" src={Author4.src} alt="" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-800">
                        <Link href="author.html">Sarah Lee</Link>
                      </p>
                      <p className="text-sm text-gray-500">
                        22 July 2017 • 6 min read
                      </p>
                    </div>
                  </div>
                  <Link
                    href="../Posts/Post4"
                    className="text-blue-500 hover:underline font-medium"
                  >
                    Read Story
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
