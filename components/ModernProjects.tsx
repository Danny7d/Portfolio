function ModernProjects() {
  const projects = [
    {
      name: "Tably",
      description:
        "Multi-tenant restaurant management SaaS built for Ethiopian restaurants. QR table ordering (no app required), kitchen display system, multi-branch admin dashboard, real-time order tracking, and AI-powered review insights. I own the full product cycle — architecture, backend, frontend, marketing site, and going-to-market decisions.",
      highlights: [
        "QR ordering with zero-download customer experience",
        "Multi-tenant architecture with branch-level isolation",
        "Kitchen Display System + live order lifecycle",
        "Marketing site + SEO + conversion-focused landing",
      ],
      stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Gemini AI"],
      liveUrl: "https://tably.site",
      githubUrl: "https://github.com/Danny7d/Tably",
      gradient: "from-orange-500 to-red-500",
      icon: "🍽️",
    },
    {
      name: "MailDesk",
      description:
        "No-code email platform on top of Resend. Connect your own API key once, then send and receive branded email from a Gmail-style inbox. Built with strong security focus: AES-256-GCM encrypted keys at rest, multi-tenant isolation, webhook-verified inbound mail, and rate limiting.",
      highlights: [
        "AES-256-GCM encrypted Resend API keys (never exposed to browser)",
        "Inbound email via Resend webhooks + read/unread state",
        "Per-user data isolation and bcrypt auth",
        "Clean composer + sent history with delivery status",
      ],
      stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "Resend", "NextAuth"],
      liveUrl: "https://inbound.tably.site",
      githubUrl: "https://github.com/Danny7d/MailDesk",
      gradient: "from-purple-500 to-indigo-500",
      icon: "📧",
    },
    {
      name: "Movie Mint",
      description:
        "Cinematic movie discovery app that surfaces trending and popular titles, supports real-time search, and shows rich detail pages with cast, ratings, and trailers. Built as a focused frontend project emphasizing clean component design, API handling, and responsive UX.",
      highlights: [
        "TMDB + OMDb API integration with graceful empty states",
        "Dynamic backdrop backgrounds and hover interactions",
        "Trailer modal with keyboard support",
        "Fully responsive cinematic UI",
      ],
      stack: ["React", "Vite", "Tailwind CSS", "Axios", "TMDB API"],
      liveUrl: "https://movie-mint-d.vercel.app/",
      githubUrl: "https://github.com/Danny7d/Movie-Mint",
      gradient: "from-slate-600 to-slate-700",
      icon: "🎬",
    },
    {
      name: "Pick Fashion",
      description:
        "Ethiopian fashion e-commerce experience with product browsing, cart flow, and Telegram bot integration for ordering and seller communication. Customers can place requests directly through Telegram; the admin side handles order management and customer messaging.",
      highlights: [
        "Product catalog + responsive shopping experience",
        "Telegram bot for order requests and seller chat",
        "Supabase-backed data and authentication",
        "End-to-end flow from browse → order → confirmation",
      ],
      stack: ["React", "Supabase", "PostgreSQL", "Tailwind", "Telegram Bot"],
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
            Real products I have designed, built, and shipped — from idea to
            live users.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 animate-glow`}
              />

              <div className="relative glass glass-hover rounded-2xl p-8 hover-tilt transition-all duration-500">
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

                  <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                    <span className="text-green-400 text-sm font-semibold">
                      Live
                    </span>
                  </div>
                </div>

                <p className="text-gray-200 mb-5 leading-relaxed text-[15px]">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">
                    What I built
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <span className="text-cyan-400 mt-0.5">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

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

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl hover-glow hover-scale transition-all duration-300`}
                  >
                    <span className="flex items-center justify-center space-x-2">
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
                      <span>Source</span>
                    </span>
                  </a>
                </div>

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
