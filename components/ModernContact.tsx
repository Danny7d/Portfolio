function ModernContact() {
  const contactMethods = [
    {
      name: "Email",
      value: "danny0988lewis@gmail.com",
      icon: "📧",
      url: "mailto:danny0988lewis@gmail.com",
      description: "Send me a message anytime",
      gradient: "from-red-500 to-pink-500",
    },
    {
      name: "Phone",
      value: "+251 937 505 084",
      icon: "📱",
      url: "tel:+251937505084",
      description: "Available for calls and messages",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "GitHub",
      value: "github.com/Danny7d",
      icon: "💻",
      url: "https://github.com/Danny7d",
      description: "Check out my projects",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/danny0988lewis",
      icon: "💼",
      url: "https://www.linkedin.com/in/danny0988lewis/",
      description: "Connect professionally",
      gradient: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <section className="min-h-screen py-12 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-slate-400 to-gray-400 bg-clip-text text-transparent animate-gradient">
              Get In Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and
            opportunities. Feel free to reach out through any of the channels
            below.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={method.name}
              href={method.url}
              target={method.url.startsWith("http") ? "_blank" : "_self"}
              rel={method.url.startsWith("http") ? "noopener noreferrer" : ""}
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass glass-hover rounded-2xl p-6 h-full hover-glow hover-scale transition-all duration-300">
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:animate-float transition-all duration-300`}
                >
                  {method.icon}
                </div>

                {/* Contact Info */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {method.name}
                </h3>

                <p className="text-gray-200 text-sm mb-2 font-medium">
                  {method.value}
                </p>

                <p className="text-gray-400 text-xs">{method.description}</p>

                {/* Hover indicator */}
                <div className="mt-4 text-cyan-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to {method.name.toLowerCase()} →
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Message Section */}
        <div className="glass glass-hover rounded-2xl p-8 mb-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-slate-400 bg-clip-text text-transparent">
                Let's Build Something Together
              </span>
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Whether you have a project in mind, want to collaborate, or just
              want to chat about web development, I'm excited to hear from you.
              I'm particularly interested in full-stack development opportunities
              building end-to-end web applications.
            </p>

            {/* Quick Contact Links */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:danny0988lewis@gmail.com"
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-full hover-glow hover-scale transition-all duration-300"
              >
                <span className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>Send Email</span>
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/danny0988lewis/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 glass glass-hover text-gray-200 font-semibold rounded-full border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                <span className="flex items-center space-x-2">
                  <span>💼</span>
                  <span>LinkedIn</span>
                </span>
              </a>

              <a
                href="https://github.com/Danny7d"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 glass glass-hover text-gray-200 font-semibold rounded-full border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                <span className="flex items-center space-x-2">
                  <span>💻</span>
                  <span>GitHub</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Availability Section */}
        <div className="text-center">
          <div className="glass glass-hover rounded-2xl p-6 inline-block">
            <h3 className="text-lg font-semibold text-white mb-3">
              Current Status
            </h3>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gray-200">
                Available for freelance projects
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Open to full-stack development projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModernContact;
