"use client";
import React, { useState } from "react";
import pic from "../../images/a1.jpeg";
import Author1 from "../../images/author1.jpg";

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
              Beginners Guide to Building Your First Website
            </h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <img
                  src={Author1.src}
                  alt="Author"
                  className="h-10 w-10 rounded-full"
                />
                <span className="ml-2">Emily Chen</span>
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
              Building your first website is an exciting milestone! Whether
              you’re pursuing web development as a career or as a hobby,
              creating a website from scratch can be a rewarding experience.
              Here’s a beginner-friendly guide to help you get started.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Plan Your Website
            </h2>

            <p className="mb-6 text-gray-700">
              Start by deciding the purpose of your website. Is it a portfolio,
              a blog, or a small business site? Outline the pages you’ll need,
              like a homepage, about page, and contact page, and sketch a rough
              layout for each.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Learn the Basics
            </h2>

            <p className="mb-6 text-gray-700">
              Familiarize yourself with HTML, CSS, and basic JavaScript. HTML is
              used for the structure, CSS for styling, and JavaScript for adding
              interactivity. Platforms like freeCodeCamp and W3Schools are great
              for beginners.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Choose a Code Editor
            </h2>

            <p className="mb-6 text-gray-700">
              Use a code editor like Visual Studio Code to write your code. It’s
              free, beginner-friendly, and offers features like syntax
              highlighting and extensions to make coding easier.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Start Coding
            </h2>

            <p className="mb-6 text-gray-700">
              Begin by creating an HTML file (e.g., <code>index.html</code>) for
              your website’s structure. Add a CSS file to style your site, and
              optionally include JavaScript for interactivity. Keep your design
              simple and focus on functionality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Test and Deploy
            </h2>

            <p className="mb-6 text-gray-700">
              Test your website on different devices and browsers to ensure it
              works well everywhere. Once satisfied, deploy your site using
              platforms like GitHub Pages, Netlify, or Vercel for free hosting.
            </p>

            <p className="mb-6 text-gray-700">
              Building your first website is a journey of learning and
              experimentation. Don’t be afraid to make mistakes and keep
              iterating. Happy coding!
            </p>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Web Development
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Beginners
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Guide
            </span>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <img
                src={Author1.src}
                alt="Author"
                className="h-16 w-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Emily Chen
                </h3>
                <p className="text-gray-600 mt-1">
                  Emily is a frontend developer and mentor, passionate about
                  helping beginners take their first steps in web development
                  with confidence and creativity.
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
