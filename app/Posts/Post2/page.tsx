"use client";
import React, { useState } from "react";
import pic from "../../images/post2.png";
import Author2 from "../../images/author2.jpg";

function Page() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [likes, setLikes] = useState<number>(0);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment(""); // Clear input after adding comment
    }
  };

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-10">
        <article className="max-w-4xl mx-auto">
          {/* Post Header */}
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Top 5 Tools Every Next.js Developer Should Know
            </h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <img
                  src={Author2.src}
                  alt="Author"
                  className="h-10 w-10 rounded-full"
                />
                <span className="ml-2">Jane Smith</span>
              </div>
              <span>•</span>
              <time>March 25, 2024</time>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={pic.src}
              alt="Featured image"
              className="w-full object-cover"
            />
          </div>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="mb-6 text-gray-700">
              Next.js has become one of the most popular frameworks for building
              React-based applications. To maximize productivity and efficiency
              while using Next.js, developers rely on a range of tools. Here are
              the top 5 tools every Next.js developer should know in 2024.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Vercel
            </h2>

            <p className="mb-6 text-gray-700">
              Vercel is the creator of Next.js, and it’s also the best platform
              to deploy your Next.js projects. With seamless integration,
              automatic deployments, and advanced analytics, Vercel ensures your
              applications are fast and reliable.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Tailwind CSS
            </h2>

            <p className="mb-6 text-gray-700">
              Tailwind CSS is a utility-first CSS framework that allows you to
              quickly style your Next.js components. Its flexibility and modern
              design system make it a must-have for building responsive and
              beautiful user interfaces.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Sanity
            </h2>

            <p className="mb-6 text-gray-700">
              Sanity is a headless CMS that integrates seamlessly with Next.js.
              It’s highly customizable, scalable, and provides real-time
              collaboration for managing content. Developers can use Sanity to
              create dynamic and content-rich websites with ease.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Postman
            </h2>

            <p className="mb-6 text-gray-700">
              Postman is an essential tool for testing APIs, which is especially
              useful when working on server-side rendering or API routes in
              Next.js. It allows you to streamline the process of debugging and
              integration testing.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. ESLint and Prettier
            </h2>

            <p className="mb-6 text-gray-700">
              Writing clean and consistent code is critical, and tools like
              ESLint and Prettier help enforce best practices. Next.js comes
              with built-in support for ESLint, making it easier to catch errors
              and maintain code quality.
            </p>

            <p className="mb-6 text-gray-700">
              By incorporating these tools into your workflow, you can enhance
              the development experience, improve project performance, and
              deliver high-quality applications with Next.js.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Next.js
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Tools
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Web Development
            </span>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <img
                src={Author2.src}
                alt="Author"
                className="h-16 w-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Jane Smith
                </h3>
                <p className="text-gray-600 mt-1">
                  Jane is a passionate frontend developer with expertise in
                  Next.js. She loves exploring new tools and sharing tips to
                  help developers build efficient and scalable web applications.
                </p>
              </div>
            </div>
          </div>

          {/* Like Button */}
          <div className="mt-8">
            <button
              onClick={handleLike}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
            >
              Like Post ({likes})
            </button>
          </div>

          {/* Comment Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comments</h2>
            <form onSubmit={handleCommentSubmit} className="mb-4">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="w-full px-4 py-2 border rounded-lg"
              />
            </form>
            <div className="space-y-4">
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-100 rounded-lg shadow-sm"
                >
                  {comment}
                </div>
              ))}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

export default Page;
