import Link from "next/link";

function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Your Personal
          <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
            {" "}
            AI Assistant
          </span>
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience intelligent conversations with multiple AI models, custom contexts, and real-time responses. Built
          for professionals who demand flexibility and control.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={"/chat"}
            prefetch={true}
            className="bg-green-900 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition-colors text-lg font-semibold"
          >
            Start Chatting Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
