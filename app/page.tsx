import Featured from "./components/Featured"
import AllStories from "./components/AllStories";

export default function Home() {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto px-4 py-8 mt-16">
        <div className="text-left">
          {/* Site Title */}
          <h1 className="text-4xl font-bold text-gray-900">Modern Memoirs
          </h1>
          {/* Subtitle */}
          <p className="text-lg text-gray-600 mt-4">
          Mastering Code and Tech: Insights, Tips, and Trends
          </p>
        </div>
      </div>
      <Featured/>
      <AllStories/>
    </div>
  );
}
