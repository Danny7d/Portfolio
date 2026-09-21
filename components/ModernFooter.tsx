import Link from 'next/link';

function ModernFooter() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Danny7d",
      icon: "💻",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/danny0988lewis/",
      icon: "💼",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      name: "Email",
      url: "mailto:danny0988lewis@gmail.com",
      icon: "📧",
      gradient: "from-red-500 to-pink-600",
    },
    {
      name: "Phone",
      url: "tel:+251937505084",
      icon: "📱",
      gradient: "from-green-500 to-emerald-600",
    },
  ];

  const projectLinks = [
    {
      name: "Movie Mint",
      url: "https://github.com/Danny7d/Movie-Mint",
      icon: "🎬",
    },
    {
      name: "Pick Fashion",
      url: "https://github.com/Danny7d/Pick-Fashion",
      icon: "👗",
    },
  ];

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full animate-float blur-xl" />
        <div
          className="absolute top-0 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full animate-float blur-xl"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-0 left-1/2 w-24 h-24 bg-pink-500/10 rounded-full animate-float blur-xl"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 glass border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-16">
          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center animate-rotate-3d">
                  <span className="text-white font-bold text-lg">DT</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Daniel Tadesse
                  </h3>
                  <p className="text-gray-400 text-sm">Solo Founder & Developer</p>
                </div>
              </div>

              <p className="text-gray-100 leading-relaxed">
                Building a SaaS product from the ground up, one commit at a
                time. Let&apos;s connect.
              </p>
            </div>

            {/* Quick links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <div className="space-y-3">
                {[
                  { name: "Home", path: "/" },
                  { name: "Projects", path: "/projects" },
                  { name: "Skills", path: "/skills" },
                  { name: "About", path: "/about" },
                  { name: "Contact", path: "/getintouch" },
                ].map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="flex items-center space-x-3 text-gray-200 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      →
                    </span>
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">
                Featured Projects
              </h4>
              <div className="space-y-3">
                {projectLinks.map((project, index) => (
                  <a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-xl group-hover:animate-float">
                      {project.icon}
                    </span>
                    <span>{project.name}</span>
                    <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="border-t border-white/10 pt-8">
            <h4 className="text-lg font-semibold text-white mb-6">Say Hello</h4>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-xl flex items-center justify-center text-white hover-glow hover-scale transition-all duration-300`}
                    >
                      <span className="text-xl">{social.icon}</span>
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.name}
                    </div>
                  </a>
                ))}
              </div>

              <div className="text-center md:text-right">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Daniel Tadesse. All rights
                  reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Built with modern web technologies and lots of ☕
                </p>
              </div>
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient" />
        </div>
      </div>
    </footer>
  );
}

export default ModernFooter;
