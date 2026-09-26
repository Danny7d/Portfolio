function ModernProjects() {
  const projects = [
    {
      name: "Tably",
      description:
        "Multi-tenant restaurant SaaS platform with QR ordering, kitchen display system, and AI-powered review insights",
      features: [
        "QR Table Ordering",
        "Multi-Tenant Architecture",
        "AI Review Insights",
        "Kitchen Display System",
      ],
      stack: ["Next.js", "TypeScript", "Supabase", "Gemini AI"],
      liveUrl: "https://tably.site",
      githubUrl: "https://github.com/Danny7d/Tably",
      gradient: "from-orange-500 to-red-500",
      icon: "🍽️",
    },
    {
      name: "MailDesk",
      description:
        "No-code email platform with secure inbound/outbound sending, encrypted key storage, and async queue processing",
      features: [
        "AES-256 Encrypted API Keys",
        "Inbound Email Receiving",
        "Async Queue Processing",
        "Multi-Tenant Isolation",
      ],
      stack: ["Next.js", "Fastify", "PostgreSQL", "Redis"],
      liveUrl: "https://inbound.tably.site",
      githubUrl: "https://github.com/Danny7d/MailDesk",
      gradient: "from-purple-500 to-indigo-500",
      icon: "📧",
    },
    {
      name: "Movie Mint",
      description:
        "Cinematic movie discovery platform with real-time data and immersive UI",
      features: [
        "Movie Search",
        "Trending Movies",
        "API Integration",
        "Responsive Design",
      ],
      stack: ["React", "Tailwind CSS", "Vite", "Movie API"],
      liveUrl: "https://movie-mint-d.vercel.app/",
      githubUrl: "https://github.com/Danny7d/Movie-Mint",
      gradient: "from-slate-600 to-slate-700",
      icon: "🎬",
    },
    {
      name: "Pick Fashion",
      description:
        "Modern e-commerce platform with authentication and seamless shopping experience",
      features: [
        "Product Browsing",
        "Shopping Cart",
        "User Authentication",
        "Database Integration",
      ],
      stack: ["React", "Supabase", "PostgreSQL", "Tailwind"],
      liveUrl: "https://pick-fashion.vercel.app/",
      githubUrl: "https://github.com/Danny7d/Pick-Fashion",
      gradient: "from-cyan-500 to-blue-500",
      icon: "👗",
    },
  ];

  return (
    <section className="py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-slate-400 to-gray-400 bg-clip-text text-transparent animate-gradient">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my latest work showcasing modern web development, creative
            problem-solving, and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card glow effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500 animate-glow`}
              />

              {/* Main card */}
              <div className="relative glass glass-hover rounded-2xl p-8 hover-tilt transition-all duration-500">
                {/* Project header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center text-2xl animate-float`}
                    >
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="text-gray-400 text-sm">Featured Project</p>
                    </div>
                  </div>

                  {/* Status badge */}
                  <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                    <span className="text-green-400 text-sm font-semibold">
                      Live
                    </span>
                  </div>
                </div>

                {/* Project description */}
                <p className="text-gray-200 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 bg-gradient-to-r ${project.gradient}/20 text-gray-200 rounded-full text-sm border border-white/10`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 glass glass-hover text-gray-200 rounded-lg text-sm hover:text-cyan-400 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl hover-glow hover-scale transition-all duration-300`}
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>🚀</span>
                      <span>Live Demo</span>
                    </span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 glass glass-hover text-gray-300 font-semibold rounded-xl border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>💻</span>
                      <span>Source Code</span>
                    </span>
                  </a>
                </div>

                {/* Floating decoration */}
                <div
                  className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-r ${project.gradient} rounded-full opacity-10 animate-pulse`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ModernProjects;
