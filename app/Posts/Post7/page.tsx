"use client";
import React, { useState } from "react";
import pic from "../../images/a3.png";
import Author3 from "../../images/author3.jpg";

function page() {
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
              Best Practices for Responsive Web Design
            </h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <img
                  src={Author3.src}
                  alt="Author"
                  className="h-10 w-10 rounded-full"
                />
                <span className="ml-2">Jessica Lee</span>
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
              Responsive web design is a fundamental aspect of modern web
              development. It ensures that websites look great and function well
              on devices of all sizes, from desktops to smartphones. Here are
              some best practices to create responsive designs that enhance user
              experience.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Use a Mobile-First Approach
            </h2>

            <p className="mb-6 text-gray-700">
              Start designing and developing for smaller screens first, then
              scale up for larger devices. This approach ensures that your
              website is fully functional and optimized for mobile users, who
              make up a significant portion of web traffic.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Leverage Flexible Grids
            </h2>

            <p className="mb-6 text-gray-700">
              Use a flexible grid system, such as Flexbox or CSS Grid, to create
              layouts that adapt to different screen sizes. This allows elements
              to resize and reposition dynamically without breaking the design.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Optimize Images
            </h2>

            <p className="mb-6 text-gray-700">
              Use responsive image techniques, such as the <code>srcset</code>{" "}
              attribute, to serve appropriately sized images based on the user's
              device. This improves page loading speed and ensures better visual
              quality on all screens.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Implement Media Queries
            </h2>

            <p className="mb-6 text-gray-700">
              Media queries are essential for responsive design. They allow you
              to apply different styles based on the device's screen size,
              resolution, and orientation. For example, you can hide unnecessary
              elements or adjust font sizes for smaller screens.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Prioritize Performance
            </h2>

            <p className="mb-6 text-gray-700">
              Responsive websites should also be fast. Minimize the use of heavy
              scripts, optimize CSS, and use caching to ensure your site
              performs well across all devices, even on slower networks.
            </p>

            <p className="mb-6 text-gray-700">
              By following these best practices, you can create websites that
              are visually appealing, user-friendly, and functional on any
              device. Responsive web design is no longer optional—it's a
              necessity in today’s multi-device world.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Responsive Design
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Web Development
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Best Practices
            </span>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <img
                src={Author3.src}
                alt="Author"
                className="h-16 w-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Jessica Lee
                </h3>
                <p className="text-gray-600 mt-1">
                  Jessica is a UI/UX designer and frontend developer who
                  specializes in creating responsive and accessible web
                  experiences for all users.
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

export default page;
