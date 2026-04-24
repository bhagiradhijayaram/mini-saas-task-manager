import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 max-w-5xl mx-auto leading-snug">
          Simple Task Management for Individuals & Teams
        </h1>
        <p className="text-gray-600 mb-6 text-sm sm:text-lg max-w-3xl mx-auto">
          Organize your tasks, track progress, and boost productivity — all in
          one place. Manage your daily work, stay focused, and get things done
          faster with our powerful yet simple task management system.
        </p>
        <Link to="/signup">
          <button className="px-6 py-2 bg-[#1F6F5F] text-white rounded-full">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

