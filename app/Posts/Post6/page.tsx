"use client";
import React, { useState } from "react";
import pic from "../../images/a2.jpeg";
import Author2 from "../../images/author2.jpg";

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
              The Role of AI in Modern Web Development
            </h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <img
                  src={Author2.src}
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
              Artificial Intelligence (AI) is transforming modern web
              development in remarkable ways. From enhancing user experiences to
              automating complex tasks, AI is becoming an integral part of
              building innovative and efficient websites. Here’s how AI is
              shaping the future of web development.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Personalized User Experiences
            </h2>

            <p className="mb-6 text-gray-700">
              AI enables websites to provide personalized experiences by
              analyzing user behavior and preferences. For example, AI-powered
              recommendation systems, like those used by e-commerce platforms,
              suggest products tailored to individual users.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Enhanced Chatbots
            </h2>

            <p className="mb-6 text-gray-700">
              AI-driven chatbots are revolutionizing customer support. These
              bots can handle user queries efficiently, providing instant
              responses and improving user satisfaction. They’re also capable of
              learning and adapting over time.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Automated Testing and Debugging
            </h2>

            <p className="mb-6 text-gray-700">
              AI tools can automatically test websites for bugs and performance
              issues. This reduces the time developers spend on manual testing,
              ensuring faster and more reliable deployments.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Content Generation
            </h2>

            <p className="mb-6 text-gray-700">
              AI can assist in generating content, such as blog posts or product
              descriptions, saving time for developers and marketers. Tools like
              ChatGPT make content creation faster and more efficient.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Design Assistance
            </h2>

            <p className="mb-6 text-gray-700">
              AI tools like Figma and Adobe Sensei are helping designers create
              visually appealing layouts and prototypes. AI can analyze design
              trends and provide recommendations for improving aesthetics and
              usability.
            </p>

            <p className="mb-6 text-gray-700">
              As AI continues to evolve, its role in web development will
              expand, enabling developers to create smarter, faster, and more
              user-centric websites. Embracing AI is no longer optional but
              essential for staying competitive in the tech industry.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              AI
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Web Development
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Technology
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
                  Alex Johnson
                </h3>
                <p className="text-gray-600 mt-1">
                  Alex is a tech enthusiast and web developer who specializes in
                  integrating AI technologies into modern web applications for
                  enhanced user experiences.
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
