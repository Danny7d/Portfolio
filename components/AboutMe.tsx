function AboutMe() {
  return (
    <section className="py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              About Me
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Picture */}
          <div className="text-center lg:text-right animate-slide-left">
            <div className="relative inline-block">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 glass hover-scale transition-all duration-300">
                <img
                  src="/me.jpg"
                  alt="Daniel Tadesse"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400/25 to-purple-400/25 blur-2xl" />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 animate-slide-right">
            <div className="glass glass-hover rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Daniel Tadesse
                </span>
              </h2>

              <p className="text-lg text-gray-100 leading-relaxed mb-5">
                Engineering student at AASTU and independent software developer
                focused on building products that solve real problems.
              </p>

              <p className="text-base text-gray-200 leading-relaxed mb-5">
                I work across the full stack — interfaces, APIs, databases,
                authentication, and deployment. What interests me most is taking
                an idea beyond the code and figuring out how to make it useful
                to the people it is built for.
              </p>

              <p className="text-base text-gray-200 leading-relaxed mb-6">
                One of my main projects is <span className="text-cyan-400 font-medium">Tably</span>, a
                restaurant management and ordering platform I am building to help
                restaurants run operations more efficiently. Working on it has
                pushed me to think about product decisions, business needs, and
                how to get software into the hands of real users. I also explore
                other ideas such as MailDesk while strengthening engineering
                fundamentals through hands-on projects.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-gray-100">
                    Learn best by building, running into problems, and solving them
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div
                    className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <span className="text-gray-100">
                    Self-taught: React, Next.js, TypeScript, Supabase, PostgreSQL
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                  <span className="text-gray-100">
                    Turning ideas into software people can actually use
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
