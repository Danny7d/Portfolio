"use client";

function ModernSkills() {
  const skillGroups = [
    {
      title: "Frontend",
      icon: "⚛️",
      items: [
        "React & Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Responsive UI / UX",
        "Vite",
      ],
    },
    {
      title: "Backend & Data",
      icon: "🗄️",
      items: [
        "Supabase & PostgreSQL",
        "Prisma",
        "REST APIs",
        "Authentication (NextAuth, Supabase Auth)",
        "Webhooks & real-time",
      ],
    },
    {
      title: "Tools & Workflow",
      icon: "🛠️",
      items: [
        "Git & GitHub",
        "Vercel",
        "Linux",
        "Product thinking & shipping",
        "Building in public",
      ],
    },
  ];

  const extra = [
    "HTML5",
    "CSS3",
    "ES6+",
    "React Hooks",
    "Zod",
    "npm",
    "JSON",
    "SEO basics",
    "Telegram Bots",
  ];

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
            Technologies I use to design, build, and ship real products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="glass glass-hover rounded-2xl p-8 hover-glow transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">{group.title}</h3>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center text-xl">
                  {group.icon}
                </div>
              </div>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass glass-hover rounded-2xl p-8 inline-block max-w-3xl">
            <h3 className="text-xl font-bold text-white mb-6">
              Also comfortable with
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {extra.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 glass glass-hover text-gray-300 rounded-lg text-sm hover:text-cyan-400 transition-all duration-300 hover-scale"
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
