"use client";
import React, { useState } from "react";
import pic from "../../images/post1.jpeg";
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
          {/* Your existing post content */}
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Future of Web Development: Trends to Watch in 2024
            </h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <img
                  src={Author1.src}
                  alt="Author"
                  className="h-10 w-10 rounded-full"
                />
                <span className="ml-2">John Doe</span>
              </div>
              <span>•</span>
              <time>March 25, 2024</time>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </header>

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
              Web development is evolving rapidly, with new tools, frameworks,
              and trends shaping the way developers build and users experience
              websites. As we step into 2024, several key trends are emerging
              that promise to redefine the web development landscape.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Artificial Intelligence and Machine Learning
            </h2>

            <p className="mb-6 text-gray-700">
              Artificial Intelligence (AI) and Machine Learning (ML) are
              becoming integral to web development. From chatbots providing
              instant customer support to AI-driven personalization, these
              technologies are enhancing user experiences like never before. In
              2024, expect to see more websites leveraging AI for predictive
              analytics, content generation, and dynamic UI updates.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Progressive Web Applications (PWAs)
            </h2>

            <p className="mb-6 text-gray-700">
              PWAs continue to gain traction as they offer a seamless experience
              across devices. Combining the best features of web and mobile
              apps, PWAs are fast, reliable, and engaging. Companies like
              Twitter and Pinterest have already adopted PWAs, and this trend is
              expected to grow further in 2024.
            </p>

            <blockquote className="border-l-4 border-gray-200 pl-4 italic my-8 text-gray-600">
              "By 2024, 50% of all consumer-facing apps will be PWAs, improving
              accessibility and performance for users globally." – Industry
              Expert
            </blockquote>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Low-Code and No-Code Development
            </h2>

            <p className="mb-6 text-gray-700">
              Low-code and no-code platforms are democratizing web development,
              enabling non-developers to build functional websites and
              applications. These platforms are expected to evolve in 2024,
              offering advanced customization options and integrations, making
              development faster and more accessible.
            </p>

            <p className="mb-6 text-gray-700">
              With these trends and more, the future of web development is
              bright, innovative, and geared toward creating exceptional user
              experiences. As developers, staying updated with these trends is
              crucial to delivering modern, efficient, and user-friendly
              websites.
            </p>
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
                  John Doe
                </h3>
                <p className="text-gray-600 mt-1">
                  John is a seasoned web developer and tech enthusiast with over
                  10 years of experience in the field. He is passionate about
                  sharing insights on emerging trends and technologies shaping
                  the future of web development.
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
