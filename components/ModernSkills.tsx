"use client";

import { useState, useEffect } from "react";

function ModernSkills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = {
    "Full Stack Development": [
      {
        name: "React",
        level: 90,
        gradient: "from-cyan-400 to-blue-500",
        icon: "⚛️",
      },
      {
        name: "Next.js",
        level: 85,
        gradient: "from-white to-gray-400",
        icon: "▲",
      },
      {
        name: "JavaScript",
        level: 85,
        gradient: "from-yellow-400 to-orange-500",
        icon: "🟨",
      },
      {
        name: "Tailwind CSS",
        level: 80,
        gradient: "from-teal-400 to-cyan-500",
        icon: "🎨",
      },
      {
        name: "Vite",
        level: 75,
        gradient: "from-purple-400 to-pink-500",
        icon: "⚡",
      },
    ],
    Backend: [
      {
        name: "Supabase",
        level: 85,
        gradient: "from-green-400 to-emerald-500",
        icon: "🗄️",
      },
      {
        name: "PostgreSQL",
        level: 80,
        gradient: "from-blue-400 to-indigo-500",
        icon: "🐘",
      },
      {
        name: "Authentication",
        level: 85,
        gradient: "from-red-400 to-pink-500",
        icon: "🔐",
      },
      {
        name: "REST APIs",
        level: 80,
        gradient: "from-indigo-400 to-purple-500",
        icon: "🔌",
      },
    ],
    Tools: [
      {
        name: "Git & GitHub",
        level: 85,
        gradient: "from-gray-400 to-gray-600",
        icon: "📦",
      },
      {
        name: "Linux",
        level: 75,
        gradient: "from-yellow-400 to-orange-500",
        icon: "🐧",
      },
      {
        name: "Vercel",
        level: 70,
        gradient: "from-white to-gray-400",
        icon: "🚀",
      },
    ],
  };

  return (
    <section className="py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the
            technologies I work with to build amazing products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(
            ([category, skills], categoryIndex) => (
              <div
                key={category}
                className="glass glass-hover rounded-2xl p-8 hover-glow transition-all duration-500"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                {/* Category header */}
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-white">{category}</h3>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center animate-pulse">
                    <span className="text-white font-bold">
                      {category === "Full Stack Development" && "🎯"}
                      {category === "Backend" && "⚙️"}
                      {category === "Tools" && "🛠️"}
                    </span>
                  </div>
                </div>

                {/* Skills list */}
                <div className="space-y-6">
                  {skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="group"
                      style={{
                        animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`,
                      }}
                    >
                      {/* Skill header */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-xl group-hover:animate-float transition-all duration-300">
                            {skill.icon}
                          </span>
                          <span className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-gray-400 text-sm font-medium">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="relative h-3 bg-gray-700/50 rounded-full overflow-hidden">
                        {/* Animated progress */}
                        <div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                        </div>

                        {/* Glow effect */}
                        <div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.gradient} rounded-full opacity-50 blur-sm`}
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                          }}
                        />
                      </div>

                      {/* Skill dots indicator */}
                      <div className="flex space-x-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-1 w-full rounded-full transition-all duration-300 ${
                              i < Math.floor(skill.level / 20)
                                ? `bg-gradient-to-r ${skill.gradient}`
                                : "bg-gray-700/50"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>

        {/* Additional skills cloud */}
        <div className="mt-16 text-center">
          <div className="glass glass-hover rounded-2xl p-8 inline-block">
            <h3 className="text-xl font-bold text-white mb-6">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "HTML5",
                "CSS3",
                "ES6+",
                "React Hooks",
                "Responsive Design",
                "UI/UX",
                "Git",
                "npm",
                "REST",
                "JSON",
              ].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 glass glass-hover text-gray-300 rounded-lg text-sm hover:text-cyan-400 transition-all duration-300 hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModernSkills;
