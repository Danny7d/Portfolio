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
              {/* Subtle glow effect behind image */}
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

              <p className="text-lg text-gray-100 leading-relaxed mb-6">
                Solo founder and self-taught developer based in Addis Ababa,
                Ethiopia. Currently building a SaaS product end-to-end —
                architecture, backend, frontend, and everything in between —
                while learning by shipping real, working software.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-gray-100">
                    Building in public, one commit at a time
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
                    Focused on turning a working product into a paying business
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
