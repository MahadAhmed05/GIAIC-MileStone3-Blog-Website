"use client";
import React, { useState } from "react";
import pic from "../../images/post4.jpeg";
import Author4 from "../../images/author4.jpg";

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
              Top 5 Free Resources to Learn Programming Online
            </h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <img
                  src={Author4.src}
                  alt="Author"
                  className="h-10 w-10 rounded-full"
                />
                <span className="ml-2">Sarah Lee</span>
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
              Learning programming has never been easier, thanks to the
              abundance of free resources available online. Here are the top
              five platforms where you can start your coding journey for free.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. freeCodeCamp
            </h2>

            <p className="mb-6 text-gray-700">
              freeCodeCamp offers comprehensive coding tutorials,
              certifications, and real-world projects. From web development to
              data science, it’s a one-stop platform for all programming
              enthusiasts.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Codecademy
            </h2>

            <p className="mb-6 text-gray-700">
              Codecademy provides interactive lessons on various programming
              languages. While the free version has limited content, it’s
              perfect for beginners looking to get started.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Khan Academy
            </h2>

            <p className="mb-6 text-gray-700">
              Khan Academy offers a variety of courses, including computer
              science and programming. Its beginner-friendly tutorials make
              learning coding concepts enjoyable.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. W3Schools
            </h2>

            <p className="mb-6 text-gray-700">
              W3Schools is a popular platform for learning web development. Its
              interactive examples and "Try it Yourself" feature make it easy to
              practice coding directly on the platform.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. The Odin Project
            </h2>

            <p className="mb-6 text-gray-700">
              The Odin Project provides a full-stack curriculum that guides
              learners through web development, from HTML and CSS to JavaScript
              and beyond. It’s a well-structured resource for aspiring
              developers.
            </p>

            <p className="mb-6 text-gray-700">
              These free resources are perfect for self-learners and those
              looking to explore programming at their own pace. With dedication
              and practice, you can gain the skills needed to excel in the tech
              industry.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Programming
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Free Resources
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Learning
            </span>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <img
                src={Author4.src}
                alt="Author"
                className="h-16 w-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Sarah Lee
                </h3>
                <p className="text-gray-600 mt-1">
                  Sarah is a passionate educator and developer who loves helping
                  others get started with coding by recommending practical and
                  free learning resources.
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
