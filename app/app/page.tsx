"use client";

import { useState } from "react";
import DevList from "@/components/dev-list";

export default function AppPage() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Weather App",
      icon: "🌤️",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      shortDesc: "Real-time weather updates with GPS",
      objective: "Build a mobile Weather App using Kotlin, Flutter, or React Native that provides real-time weather updates based on the user's current location.",
      features: [
        "Detect the user's location automatically using GPS",
        "Fetch real-time weather data from a reliable API (e.g., OpenWeatherMap)",
        "Display key information: temperature, humidity, wind speed, weather condition",
        "Clean and responsive UI that works on both Android and iOS"
      ],
      techStack: ["Kotlin", "Flutter", "React Native", "OpenWeatherMap API"]
    },
    {
      id: 2,
      title: "To-Do App",
      icon: "✅",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      shortDesc: "Task management with persistent storage",
      objective: "Build a cross-platform mobile To-Do App using Kotlin, Flutter, or React Native that manages tasks efficiently with a clean and intuitive interface.",
      features: [
        "Task Creation & Management: Add, edit, delete, and mark tasks as completed",
        "Persistent Storage: Store tasks locally using SQLite or text file",
        "Responsive UI: Design a clean, minimal, and responsive interface"
      ],
      optional: ["User authentication with Firebase"],
      techStack: ["Kotlin", "Flutter", "React Native", "SQLite", "Firebase"]
    },
    {
      id: 3,
      title: "Movie Discovery App",
      icon: "🎬",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      shortDesc: "Browse and explore movies with TMDb API",
      objective: "Build a modern mobile Movie Discovery App using Kotlin, Flutter, or React Native that allows users to search, browse, and explore movies with detailed information powered by The Movie Database (TMDb) API.",
      features: [
        "Movie Search: Allow users to search for movies by title using the TMDb API",
        "Browse Movies: Display trending, popular, and top-rated movies on the home screen",
        "Movie Details: Show detailed information including title, poster, rating, release date, overview, genres, and cast",
        "Filter Options: Enable filtering by genre and sorting by popularity or rating",
        "Responsive UI: Design a clean, modern, and responsive interface that works on both Android and iOS",
        "API Integration: Use TMDb API with proper authentication"
      ],
      setup: [
        "Figma file for your reference http://bit.ly/4oDquqo",
        "Get a free API key from https://www.themoviedb.org/settings/api",
        "Configure API key in your app (use environment variables or config file)"
      ],
      
      techStack: ["Kotlin", "Flutter", "React Native", "TMDb API", "Firebase"]
    }
  ];

  const toggleProject = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          App Development Projects
        </h1>
        <p className="text-muted-foreground mt-3 text-lg">
          Build amazing cross-platform mobile applications and enhance your development skills
        </p>
      </div>

      {/* Projects Grid - Compact when collapsed */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`relative overflow-hidden rounded-2xl border ${project.borderColor} bg-gradient-to-br ${project.color} backdrop-blur-sm transition-all duration-500 cursor-pointer ${
              expandedProject === project.id
                ? "md:col-span-3 shadow-2xl"
                : "hover:shadow-lg hover:scale-[1.02]"
            }`}
            onClick={() => toggleProject(project.id)}
          >
            {/* Compact View */}
            <div className="p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className={`text-4xl transition-all duration-300 ${expandedProject === project.id ? "text-5xl" : ""}`}>
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold">
                    {project.title}
                  </h2>
                  {expandedProject !== project.id && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.shortDesc}
                    </p>
                  )}
                </div>
                <div className={`text-2xl transition-transform duration-300 ${expandedProject === project.id ? "rotate-180" : ""}`}>
                  ▼
                </div>
              </div>

              {/* Expanded Content */}
              {expandedProject === project.id && (
                <div className="mt-6 space-y-6 animate-in fade-in-50 duration-500">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-background/50 border border-border backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Objective */}
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                      🎯 Objective
                    </h3>
                    <p className="text-base leading-relaxed">{project.objective}</p>
                  </div>

                  {/* Mandatory Features */}
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                      ✨ Mandatory Features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-green-500 mt-0.5 shrink-0">▪</span>
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Setup Instructions (if available) */}
                  {project.setup && (
                    <div className="p-4 rounded-lg bg-background/30 border border-border/50">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                        🔧 Setup Instructions
                      </h3>
                      <ol className="space-y-2">
                        {project.setup.map((step, idx) => {
                          // Convert URLs in text to clickable links
                          const urlRegex = /(https?:\/\/[^\s]+)/g;
                          const parts = step.split(urlRegex);
                          
                          return (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="font-bold text-xs mt-0.5 shrink-0">{idx + 1}.</span>
                              <span className="text-sm leading-relaxed">
                                {parts.map((part, i) => {
                                  if (part.match(urlRegex)) {
                                    return (
                                      <a
                                        key={i}
                                        href={part}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:text-blue-400 underline"
                                      >
                                        {part}
                                      </a>
                                    );
                                  }
                                  return <span key={i}>{part}</span>;
                                })}
                              </span>
                            </li>
                          );
                        })}
                      </ol>
                    </div>
                  )}

                  {/* Optional Enhancements */}
                  {project.optional && (
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                        💡 Optional Enhancements
                      </h3>
                      <ul className="space-y-2">
                        {project.optional.map((enhancement, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-yellow-500 mt-0.5 shrink-0">★</span>
                            <span className="text-sm leading-relaxed">{enhancement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Student List */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Student Progress</h2>
        <DevList kind="appDev" />
      </div>
    </section>
  );
}
