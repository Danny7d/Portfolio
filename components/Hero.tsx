"use client";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-blue-900/10 to-slate-900/10 animate-gradient" />

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-slate-800/10 to-slate-700/10 rounded-full animate-float blur-xl" />
      <div
        className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-slate-800/10 to-slate-700/10 rounded-full animate-float blur-xl"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-slate-800/10 to-slate-700/10 rounded-full animate-float blur-xl"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
        {/* Profile Picture */}
        <div className="animate-slide-left mb-8">
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 glass hover-scale transition-all duration-300">
              <img
                src="/me.jpg"
                alt="Daniel Tadesse"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Subtle glow effect behind image */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-slate-600/25 to-slate-500/25 blur-2xl" />
          </div>
        </div>

        <div className="animate-slide-left">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300 bg-clip-text text-transparent animate-gradient">
              Daniel Tadesse
            </span>
          </h1>
        </div>

        <div className="animate-slide-right" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-8">
            <span className="inline-block">
              Full Stack Developer with experience building web applications
              from database design to polished user interfaces
            </span>
          </h2>
        </div>

        <div className="animate-slide-left" style={{ animationDelay: "0.6s" }}>
          <p className="text-lg md:text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting immersive digital experiences with modern web technologies.
            I transform ideas into elegant, high-performance applications that
            captivate users and drive results.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
