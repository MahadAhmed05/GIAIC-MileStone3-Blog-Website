"use client";
import React, { useState } from "react";
import pic from "../../images/post3.jpeg";
import Author3 from "../../images/author3.jpg";

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
              How to Stay Productive While Learning to Code
            </h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <img
                  src={Author3.src}
                  alt="Author"
                  className="h-10 w-10 rounded-full"
                />
                <span className="ml-2">Alex Johnson</span>
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
              Learning to code can be a challenging yet rewarding journey.
              Staying productive during this process is key to making consistent
              progress and avoiding burnout. Here are some practical tips to
              help you stay focused and motivated while learning to code.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Set Clear Goals
            </h2>

            <p className="mb-6 text-gray-700">
              Start by defining what you want to achieve. Whether it's mastering
              a specific programming language, building a project, or landing a
              job, having clear goals will keep you focused and provide
              direction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Create a Routine
            </h2>

            <p className="mb-6 text-gray-700">
              Consistency is crucial when learning to code. Set aside dedicated
              time each day to practice coding. A routine helps establish a
              habit and ensures steady progress.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Break Down Tasks
            </h2>

            <p className="mb-6 text-gray-700">
              Avoid feeling overwhelmed by breaking your learning into small,
              manageable tasks. Focus on one concept or project at a time, and
              celebrate small wins along the way.
            </p>

            <blockquote className="border-l-4 border-gray-200 pl-4 italic my-8 text-gray-600">
              "The key to staying productive is not about working harder, but
              working smarter and staying consistent." – Productivity Expert
            </blockquote>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Take Breaks
            </h2>

            <p className="mb-6 text-gray-700">
              Coding for long hours can lead to mental fatigue. Use techniques
              like the Pomodoro Technique to take regular breaks and recharge
              your mind. A fresh perspective can help you solve problems more
              effectively.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Join a Community
            </h2>

            <p className="mb-6 text-gray-700">
              Engage with coding communities online or offline. Interacting with
              other learners and developers can provide support, motivation, and
              valuable insights into overcoming challenges.
            </p>

            <p className="mb-6 text-gray-700">
              By setting goals, creating a routine, and leveraging support from
              the community, you can stay productive and achieve your coding
              aspirations.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Productivity
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Learning
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Coding
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
                  Alex Johnson
                </h3>
                <p className="text-gray-600 mt-1">
                  Alex is a self-taught developer who loves sharing productivity
                  tips and strategies to help others succeed in their coding
                  journeys.
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
